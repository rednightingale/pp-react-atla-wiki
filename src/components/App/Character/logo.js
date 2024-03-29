// Je souhaite faire appel à mes différents logos de manière dynamique
// à partir de mon dossier publique

const Logo = ({ name, bio }) => {
  try {
    // J'importe l'adresse de l'image de manière dynamique en fonction de la fiche personnage
    const image = `/img/Nation/nation-${bio?.ethnicity}.png`;
    // SI l'image n'existe pas, je retourne "null"
    if (!image) return null;
    // SINON, je retourne mon image avec une classe et un alt dynamique
    // Je prends en compte que "ethnicity" ne marche pas tout le temps et lorsque j'obtiens
    // une 404 pour l'image, je change la source pour la nationalité
    return (
      <img
        className="Character-header-aside-nation-image"
        src={image}
        onError={(logo) => {
          logo.target.src = `/img/Nation/nation-${bio?.nationality}.png`;
        }}
        alt={`Flag of ${name}'s nation`}
      />
    );
  }
  catch (error) {
    console.log(`Image with name "${name}" does not exist`);
    return null;
  }
};

export default Logo;
