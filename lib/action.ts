"use server";
import {z} from "zod";
import {put} from "@vercel/blob";
import {prisma} from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const UploadSchema = z.object({
    title:z.string().min(1),
    image: z
        .instanceof(File)
        .refine((file) => file.size > 0, {message : "Image is required"})
        .refine((file) => file.size === 0 || file.type.startsWith("image/"), {
            message: "only images are allowed"
        })
        .refine((file) => file.size < 4000000, {
            message: "Image must less than 4MB",
        })
})

export const uploadImage = async (prevState: unknown, formData: FormData) => {
    // console.log(formData);
    const validatedFields = UploadSchema.safeParse(
        Object.fromEntries(formData.entries())
    );

    if(!validatedFields.success){
        return {
            error: validatedFields.error.flatten().fieldErrors,
        };
    }

    //upload ke vercel

    const {title, image} = validatedFields.data;
    const {url} = await put(image.name, image, {
        access : "public",
        multipart: true
    })

    //simpan ke database
    try {
        await prisma.upload.create({
            data:{
                title,
                image: url
            }
        })
    } catch (error) {
        return {message: "Failed to create data"}
    }
    revalidatePath("/");
    redirect("/");
}