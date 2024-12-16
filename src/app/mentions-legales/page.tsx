import Link from 'next/link'
import styles from './mentions-legales.module.css'

export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales de notre site',
}

export default function MentionsLegales() {
  return (
    <div className={styles.bodyLike}>
      <Link href="/" className={styles.close}>x</Link>
      <h1>Mentions Légales</h1>

      <h3>Éditeur du site :</h3>
      <p>
      SPOT HOTELS CHR, SAS<br />
      2 Rue Jean Baptiste de Maille 11 400 Castelnaudary<br />
      Thierry DENIAU : 06 36 15 32 76 <br />
      Catherine GIROUD : 06 98 23 87 64 <br />
      Catherine.giroud@a2hfrance.fr<br />
      </p>

      <h3>Hébergeur du site :</h3>
      <p>
      Hetzner Online GmbH<br />
      Industriestr. 25
      91710 Gunzenhausen
      Germany<br />
      +49 (0)9831 505-0*<br />
      </p>

      <h3>Objet du site :</h3>
      <p>
        Ce site a pour vocation de publier des annonces de ventes d&apos;hôtels, de restaurants et de terrains.
        Aucune transaction financière n&apos;est effectuée directement sur ce site. Pour toute transaction,
        les clients doivent contacter l&apos;agence immobilière via les moyens de contact disponibles (formulaire de contact, email, ou téléphone).
      </p>

      <h3>Propriété intellectuelle :</h3>
      <p>
        L&apos;ensemble des éléments du site (textes, images, graphismes, logos) est protégé par le droit d&apos;auteur et la législation en vigueur.
        Toute reproduction, même partielle, sans autorisation préalable est strictement interdite.
      </p>

      <h3>Responsabilité :</h3>
      <p>
        L&apos;agence immobilière s&apos;efforce de fournir des informations précises sur le site, cependant, elle ne peut
        garantir l&apos;exactitude des annonces publiées et se réserve le droit de les modifier à tout moment. Elle ne
        saurait être tenue responsable des erreurs ou omissions présentes dans les informations diffusées.
      </p>

      <h3>Données personnelles :</h3>
      <p>
        Les informations recueillies via le formulaire de contact sont destinées uniquement à l&apos;agence
        immobilière pour répondre aux demandes des utilisateurs. Conformément à la loi française sur la
        protection des données personnelles, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
        des informations vous concernant. Pour exercer ce droit, veuillez contacter [adresse email de contact].
      </p>

      <h3>Cookies :</h3>
      <p>
        Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur et pour des statistiques de fréquentation. 
        Vous pouvez configurer votre navigateur pour refuser les cookies.
      </p>
    </div>
  )
}