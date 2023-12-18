/* eslint-disable prefer-const */
import React from "react";
import { getAll, insert } from "./services/photos";
import { Photo } from "./types/Photo";
import { PhotoItem } from "./components/PhotoItem";
import {FormEvent} from 'react';

const App = () => {

  const [upLoading, setUpLoading] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [photos, setPhotos] = React.useState<Photo[]>([]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();   

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File; /*image ta no name do form */

    if(file && file.size > 0) {
      setUpLoading(true);
      let result = await insert(file);
      setUpLoading(false);

      if(result instanceof Error) {
        alert(`${result.name} - ${result.message}`)
      } else {
        let newPhotoList = [...photos];
        newPhotoList.push(result)
        setPhotos(newPhotoList)
      }
    }
  }

  React.useEffect(() => {
    const getPhotos = async () => {
      setLoading(true);
      setPhotos(await getAll())
      setLoading(false);
    }
    getPhotos();
},[]);
  document.tile = "Galeria de Fotos";
  
  return (
    <div className="container">
      <div className="area">
        <header><h1>Galeria de Fotos</h1></header>

        <form method="POST" onSubmit={handleSubmit}>
          <input type="file" name="image"/>
          <input type="submit" value="Enviar"/>
          {upLoading && <div>Enviando... </div>}
        </form>

       {loading && <div className="custom-loader"></div> }

       {!loading && photos.length > 0 && 
          <div className="photolist">
            {photos.map((item, index) => (
              <PhotoItem key={index} url={item.url} name={item.name}/>
            ))}  

          </div>}
      </div>

    

    </div>
  )
}

export default App;
