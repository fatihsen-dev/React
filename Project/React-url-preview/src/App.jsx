import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  const [data, setData] = useState(false);

  const getData = () => {
    const inputText = document.querySelector("#inputText");
    fetch(
      `https://v1.nocodeapi.com/leos/link_preview/GOpdToqemrLUJqQV?url=https://${inputText.value}`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  };
  return (
    <div className='app'>
      <div className='container'>
        <h1>URL Preview</h1>
        <div className='input'>
          <input
            type='text'
            id='inputText'
            placeholder='Lütfen url https:// olmadan girin.'
          />
          <button onClick={getData}>Getir</button>
        </div>
        {data && (
          <div className='card'>
            <img src={data.image} />
            <div>
              <a href={data.url} target='_blank'>
                {data.title}
              </a>
              <div>{data.description}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
