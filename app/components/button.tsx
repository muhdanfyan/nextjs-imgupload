"use client";

// Mengimpor hook useFormStatus dari React, yang akan digunakan untuk mengetahui status form saat ini
import { useFormStatus } from "react-dom";
// Mengimpor utility clsx untuk menggabungkan className secara kondisional
import { clsx } from "clsx";
import Link from "next/link";

// Mendefinisikan dan mengekspor komponen SubmitButton
// Komponen ini menerima satu properti `label` yang merupakan string
export const SubmitButton = ({ label }: { label: string }) => {
    // Menggunakan hook useFormStatus untuk mendapatkan status form saat ini, khususnya status `pending`
    const { pending } = useFormStatus();

    return (
        // Mendefinisikan tombol dengan berbagai kelas CSS menggunakan Tailwind CSS dan clsx
        // clsx digunakan untuk menggabungkan className secara dinamis berdasarkan kondisi `pending`
        <button
            className={clsx(
                // Kelas default untuk tombol, termasuk warna, padding, dan gaya hover
                "bg-blue-700 text-white w-full font-medium py-2.5 px-6 text-base rounded-sm hover:bg-blue-600",
                {
                    // Jika form dalam status pending, tambahkan kelas ini untuk membuat tombol semi transparan
                    // dan menampilkan cursor progress (indikasi bahwa aksi sedang berlangsung)
                    "opacity-50 cursor-progress": pending,
                }
            )}
            type="submit" // Menentukan jenis tombol sebagai submit, yang akan mengirimkan form saat diklik
            disabled={pending} // Menonaktifkan tombol jika form sedang dalam status pending
        >
            {/* Menentukan teks yang ditampilkan di dalam tombol berdasarkan nilai dari prop `label` */}
            {/* Jika label adalah "upload", maka tampilkan "Uploading.." atau "Upload" berdasarkan status pending */}
            {/* Jika label bukan "upload", maka tampilkan "Updating.." atau "Update" berdasarkan status pending */}
            {label === "upload" ? (
                <>{pending ? "Uploading.." : "Upload"}</>
            ) : (
                <>{pending ? "Updating.." : "Update"}</>
            )}
        </button>
    );
};

export const EditButton = ({id}:{id:string}) =>{
    return (
        <Link href={`edit/${id}`} className="py-3 text-sm bg-gray-50 rounded-bl-md hover:bg-gray-100 text-center">Edit</Link>
    )
};

export const DeleteButton = ({id}:{id:string}) =>{
    return (
        <form className="py-3 text-sm bg-gray-50 rounded-bl-md hover:bg-gray-100 text-center">
            <button type="submit">Delete</button>
        </form>
    )
};