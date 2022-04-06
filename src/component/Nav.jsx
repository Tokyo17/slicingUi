import "./style/Nav.css"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const Nav=(props)=>{


    let {params}=useParams()
    // console.log(window.location.pathname)

    return(
<nav style={{backgroundColor:props.color}} class=" navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
        <Link to="/">REHAT</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse me-auto" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item Link">
          <Link to="/post">Post</Link>
        </li>
        <li class="nav-item Link">
            <Link to="#">Layanan Kami</Link>
        </li>
        <li class="nav-item Link">
            <Link to="#">Tentang</Link>
        </li>
        <li class="nav-item Link">
            <Link to="#">Kontak</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
export default Nav