import { Bird as BirdIcon } from "lucide-react";

import type { Bird } from "../types/bird";

import "./BirdCard.css";

interface BirdCardProps {
  bird: Bird;
}

export function BirdCard({ bird }: BirdCardProps) {
  const visibleHabitats = bird.habitats.slice(0, 3);

  return (
    <article
      className="bird-card"
      aria-labelledby={`bird-card-title-${bird.id}`}
    >
      {/* Bird image */}
      <div className="bird-card__media">
        {bird.image ? (
          <img
            className="bird-card__image"
            src={bird.image.src}
            alt={bird.image.alt}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className="bird-card__image-placeholder"
            role="img"
            aria-label={`Photograph of ${bird.commonName} not available`}
          >
            <BirdIcon size={36} strokeWidth={1.4} aria-hidden="true" />

            <span>Image not available</span>
          </div>
        )}

        {/* Conservation status */}
        {bird.conservationStatus && (
          <span className="bird-card__status">
            IUCN: {bird.conservationStatus.category}
          </span>
        )}
      </div>

      {/* Bird information */}
      <div className="bird-card__content">
        <div className="bird-card__heading">
          <span className="bird-card__family">{bird.family}</span>

          <h3 className="bird-card__name" id={`bird-card-title-${bird.id}`}>
            {bird.commonName}
          </h3>

          <p className="bird-card__scientific-name">
            <em>{bird.scientificName}</em>
          </p>
        </div>

        <p className="bird-card__description">{bird.description}</p>

        {/* Habitat categories */}
        <div className="bird-card__habitats" aria-label="Habitats">
          {visibleHabitats.map((habitat) => (
            <span className="bird-card__habitat" key={habitat}>
              {habitat.replaceAll("-", " ")}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
