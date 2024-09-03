"use client"

// Mengimpor React, meskipun dalam project Next.js yang baru, ini tidak selalu diperlukan
// karena Next.js 13+ secara otomatis mengimpor React di file komponen
import React from 'react';
// Mengimpor fungsi `uploadImage` dari folder `lib/action` yang mungkin berfungsi untuk menangani upload gambar
import { uploadImage } from '@/lib/action';
// Mengimpor `useFormState` dari 'react-dom' untuk mengelola status form
import { useFormState } from 'react-dom';
// Mengimpor komponen `SubmitButton` dari folder `components`
import { SubmitButton } from '@/app/components/button';

// Mendefinisikan komponen `CreateForm`
const CreateForm = () => {
    // Menggunakan hook `useFormState` untuk mengelola status form.
    // `state` menyimpan status form saat ini (seperti kesalahan dan status pengiriman),
    // sedangkan `formAction` digunakan untuk mengikat fungsi `uploadImage` ke form.
    const [state, formAction] = useFormState(uploadImage, null);

    return (
        // Form HTML dengan action yang ditetapkan ke `formAction` untuk menangani pengiriman form
        <form action={formAction}>
            {/* Input untuk judul gambar */}
            <div className="mb-4 pt-2">
                {/* Input teks untuk memasukkan judul gambar */}
                <input 
                    type="text" 
                    name="title" 
                    className='py-2 px-4 rounded-sm border border-gray-400 w-full' 
                    placeholder='Title...'
                />
            </div>

            {/* Area untuk menampilkan pesan kesalahan terkait judul, jika ada */}
            <div aria-live='polite' aria-atomic='true'>
                {/* Menampilkan pesan kesalahan untuk input title jika ada error di `state` */}
                <div className="text-sm text-red-500 mt-2">
                    {state?.error?.title}
                </div>
            </div>

            {/* Input untuk mengunggah file gambar */}
            <div className="mb4 pt-2">
                <input 
                    type="file" 
                    name='image' 
                    className='file:py-2 file:px-4 file:mr-4 file:rounded-sm file:border-0 file:bg-gray-200 hover:file:bg-gray-300 file:cursor-pointer border-gray-400 w-full' 
                />
            </div>

            {/* Area untuk menampilkan pesan kesalahan terkait unggahan gambar, jika ada */}
            <div aria-live='polite' aria-atomic='true'>
                {/* Menampilkan pesan kesalahan untuk input file jika ada error di `state` */}
                <div className="text-sm text-red-500 mt-2">
                    {state?.error?.image}
                </div>
            </div>

            {/* Tombol submit untuk mengunggah gambar */}
            <div className="mb4 pt-4">
                {/* Menggunakan komponen SubmitButton dan memberikan label "upload" */}
                <SubmitButton label="upload" />
            </div>
        </form>
    )
}

// Mengekspor komponen `CreateForm` sebagai default export
export default CreateForm
