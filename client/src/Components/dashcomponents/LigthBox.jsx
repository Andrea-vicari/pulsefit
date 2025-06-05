import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function LigthBox({immagine}) {
  const [open, setOpen] = React.useState(false);
  console.log(immagine)

  return (
    <>



      <img src={`${immagine}`} style={{ width: 120 }} type="button" onClick={() => setOpen(true)}/>


      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: `${immagine}` }
        ]}
      />
    </>
  );
}