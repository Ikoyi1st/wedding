import greenLook from "../assets/images/couple-green.jpeg";
import pinkFull from "../assets/images/couple-pink-full.jpeg";
import pinkPortrait from "../assets/images/couple-pink-portrait.jpeg";
import "./PhotoGallery.css";

const galleryPhotos = [
  {
    src: greenLook,
    alt: "Victoria and Salem standing together in green and navy attire.",
    caption: "A bright, joyful day together",
    className: "gallery-card gallery-card-tall",
  },
  {
    src: pinkFull,
    alt: "Victoria and Salem smiling together in patterned cream and pink outfits.",
    caption: "Warm smiles and easy laughter",
    className: "gallery-card",
  },
  {
    src: pinkPortrait,
    alt: "A closer portrait of Victoria and Salem standing side by side.",
    caption: "A closer look at the couple",
    className: "gallery-card",
  },
];

export default function PhotoGallery() {
  return (
    <section className="photo-gallery" aria-labelledby="photo-gallery-title">
      <div className="gallery-heading">
        <span className="gallery-eyebrow">Our Story In Frames</span>
        <h3 id="photo-gallery-title">Moments We Love</h3>
        <p>
          A few beautiful memories before the big celebration.
        </p>
      </div>

      <div className="gallery-grid">
        {galleryPhotos.map((photo) => (
          <figure key={photo.src} className={photo.className}>
            <img src={photo.src} alt={photo.alt} loading="lazy" />
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
