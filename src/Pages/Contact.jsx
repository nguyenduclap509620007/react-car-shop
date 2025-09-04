export default function Contact() {
  return (
    <div className="container">
      <h2 className="my-3">Contact Us</h2>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input className="form-control" placeholder="Your name" />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" placeholder="you@example.com" />
        </div>
        <div className="col-12">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" placeholder="How can we help?"></textarea>
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  );
}
