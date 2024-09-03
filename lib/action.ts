"use server";

// Mengimpor zod untuk validasi skema data
import { z } from "zod";
// Mengimpor fungsi put dari @vercel/blob untuk mengunggah file ke Vercel Blob Storage
import { put } from "@vercel/blob";
// Mengimpor prisma untuk mengakses database menggunakan Prisma ORM
import { prisma } from "@/lib/prisma";
// Mengimpor fungsi revalidatePath untuk memvalidasi ulang cache di Next.js
import { revalidatePath } from "next/cache";
// Mengimpor fungsi redirect dari Next.js untuk melakukan pengalihan halaman
import { redirect } from "next/navigation";

// Definisi skema validasi menggunakan zod
// Skema ini memeriksa bahwa `title` adalah string minimal 1 karakter,
// dan `image` adalah file yang berukuran lebih dari 0, bertipe gambar, dan kurang dari 4MB
const UploadSchema = z.object({
    title: z.string().min(1),
    image: z
        .instanceof(File)
        .refine((file) => file.size > 0, { message: "Image is required" }) // Memeriksa apakah ukuran file lebih besar dari 0
        .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
            message: "Only images are allowed", // Memeriksa apakah file bertipe gambar
        })
        .refine((file) => file.size < 4000000, {
            message: "Image must be less than 4MB", // Memeriksa apakah ukuran file kurang dari 4MB
        }),
});

// Fungsi untuk mengunggah gambar, dipanggil saat form di-submit
export const uploadImage = async (prevState: unknown, formData: FormData) => {
    // Validasi form data menggunakan skema UploadSchema
    const validatedFields = UploadSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    // Jika validasi gagal, kembalikan pesan kesalahan
    if (!validatedFields.success) {
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    // Jika validasi berhasil, lanjutkan untuk upload ke Vercel Blob Storage
    const { title, image } = validatedFields.data;
    const { url } = await put(image.name, image, {
        access: "public", // Menetapkan akses file sebagai publik
        multipart: true,  // Menggunakan multipart upload untuk file besar
    });

    // Simpan informasi gambar ke database menggunakan Prisma
    try {
        await prisma.upload.create({
            data: {
                title,
                image: url,
            },
        });
    } catch (error) {
        return { message: "Failed to create data" }; // Kembalikan pesan jika penyimpanan gagal
    }

    // Revalidate path untuk memastikan cache halaman utama diperbarui
    revalidatePath("/");
    // Redirect pengguna ke halaman utama setelah upload berhasil
    redirect("/");
};
