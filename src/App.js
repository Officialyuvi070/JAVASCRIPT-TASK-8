import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="my_header">
        <img
          className="navbarImage"
          src="https://wac-cdn.atlassian.com/dam/jcr:33c6ebab-72c3-45b1-8acc-a3e413e10477/social-share.png"
        ></img> 
        <nav className="firstHeader">
          <ul className="my-list">
            <li>
              Products{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </li>
            <li>
              Solution{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </li>
            <li>
              Support{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-down"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </li>
          </ul>
          <div className="my-right">
            <button>Try Free</button>
            <p>Buy</p>
            <svg 
            style={{
              marginTop:"20px"
            }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
            <div style={{marginTop:"14px"}}>&nbsp; | &nbsp;</div>
            <p style={{background:"white"}}>Login</p>
          </div>
        </nav>
      </div>
      <div>
        <img
          className="my-img"
          src="https://cdn.thenewstack.io/media/2023/04/7f189864-atlassian_intelligence-1024x577.jpg"
        ></img>
      </div>
    </div>
  );
}

export default App;
