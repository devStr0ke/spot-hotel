import Link from 'next/link'

export default function MentionsLegales() {
  return (
    <div className="ML_BodyLike">
      <Link href="/" className="ML_Close">×</Link>
      <h1>Mentions Légales</h1>

      <h3>Éditeur du site :</h3>
      <p>
        Nom de l'agence immobilière<br />
        Adresse de l'agence (France)<br />
        Numéro de téléphone : [Numéro de téléphone]<br />
        Adresse email : [Adresse email de contact]<br />
      </p>

      <h3>Hébergeur du site :</h3>
      <p>
        Nom de l'hébergeur<br />
        Adresse de l'hébergeur<br />
        Numéro de téléphone de l'hébergeur<br />
      </p>

      {/* Add remaining content */}
    </div>
  )
}