// Mengimpor komponen CreateForm dari folder components
import CreateForm from "../components/create-form"

// Mendefinisikan komponen CreatePage yang merupakan halaman untuk upload gambar
const CreatePage = () => {
  return (
    // Mengatur layout dengan kelas utility dari Tailwind CSS
    // min-h-screen: memastikan halaman memiliki tinggi minimal setinggi layar
    // flex: menggunakan Flexbox untuk mengatur layout
    // items-center: memastikan konten di-align secara vertikal ke tengah
    // justify-center: memastikan konten di-align secara horizontal ke tengah
    // bg-slate-100: memberikan background warna abu-abu muda pada halaman
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      {/* Membungkus konten form dengan sebuah kotak yang memiliki background putih, 
      rounded-sm: sudutnya sedikit melengkung
      shadow: memberikan bayangan pada kotak
      p-8: padding sebesar 2rem di semua sisi */}
      <div className="bg-white rounded-sm shadow p-8">
        {/* Menampilkan judul halaman dengan kelas utility
        text-2xl: ukuran teks 2xl
        font-bold: teks tebal
        mb-5: margin bawah sebesar 1.25rem */}
        <h1 className="text-2xl font-bold mb-5">Upload Image</h1>

        {/* Menyertakan komponen CreateForm di dalam halaman ini
        yang akan menampilkan form untuk mengunggah gambar */}
        <CreateForm/>
      </div>
    </div>
  )
}

// Mengekspor komponen CreatePage sebagai default export dari file ini
export default CreatePage
