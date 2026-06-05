import Siswa from "../components/Siswa";
import Navbar from "../components/Navbar";
import "../components/NavbarFixed.css";

function HomeFixed() {
  return (
    <div>
      <Navbar />
      <h1>Aplikasi React Sederhana</h1>
      <Siswa nama="Andi" kelas="XI RPL" />
    </div>
  );
}

export default HomeFixed;
