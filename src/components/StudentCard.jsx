function StudentCard({ kategori, judul, instansi, periode, deskripsi, onDelete, onEdit }) {
  return (
    <article className="experience-card card border-0 shadow-sm h-100">
      <div className="card-body p-4">
        <div className="d-flex flex-wrap justify-content-between align-items-start gap-2 mb-3">
          <span className="badge text-bg-warning-subtle experience-badge">{kategori}</span>
          <small className="text-secondary">{periode}</small>
        </div>

        <h3 className="h5 mb-1">{judul}</h3>
        <p className="text-primary fw-semibold mb-2">{instansi}</p>
        <p className="text-secondary mb-4">{deskripsi}</p>

        <div className="d-flex flex-wrap gap-2">
          <button className="btn btn-outline-dark" type="button" onClick={onEdit}>
            Edit
          </button>

          <button className="btn btn-danger" type="button" onClick={onDelete}>
            Hapus
          </button>
        </div>
      </div>
    </article>
  );
}
export default StudentCard;
