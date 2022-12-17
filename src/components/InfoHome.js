import "./InfoStyles.css";
import InfoData from "./InfoData";
import Info1 from "../assets/digital.jpg";
import Info2 from "../assets/gestion.jpg";
import Info3 from "../assets/servicePersonne.jpg";

function InfoHome() {
  return (
    <div className="info">
      <h1>Quelques filières assurées à cet établissement</h1>
      <p> __ </p>
      <div className="infocard">
        <InfoData
          image={Info1}
          heading="Développement Digital"
          text="Le tronc commun en Développement Digital est une étape importante pour acquérir les bases necessaires de l'étude, la conception, la construction, le développement, la mise au point, la maintenance et à l’amélioration des logiciels, des applications et des sites web.
          Au cours de cette étape, qui dure une année de formation professionnelle, les stagiaires suivent une formation qui a la vocation de répondre à deux types de compétences :
          - Compétences transversales : Les langues ,l' entrepreneuriat,  Compétences comportementales et sociales,  Culture et techniques avancées du numérique.
          - Compétences techniques : Identifier les besoins clients, Acquérir les bases de l'algorithmique, Programmer pour le web , Élaborer des composants métiers ,,, etc"
        />

        <InfoData
          image={Info2}
          heading="Gestion des Entreprises"
          text="Le tronc commun Gestion des Entreprises donne au stagiaire toutes les informations et compétences nécessaires pour découvrir le monde des metiers de gestion et du commerce, garantir sa polyvalence et infine faciliter son choix  de l'option professionnelle la plus compatible avec son profil."
        />
        <InfoData
          image={Info3}
          heading="Educateur Spécialisé dans la Petite Enfance"
          text="Le rôle de l’Educateur Spécialisé en Petite Enfance est d’accompagner et encadrer les enfants pour développer leurs compétences psychomotrices, linguistiques…

          C’est une fonction dans laquelle il faut être à l’écoute des enfants et de leurs familles afin de créer un champ positif favorisant le développement physique, psychomoteur, cognitif, langagier, socio-affectif et moral de l’enfant, tout en l’accompagnant dans l'exploration de son environnement.

          Le métier d’Educateur Spécialisé en Petite Enfance s’adresse aux candidats aimant le contact avec les enfants d’âge précoce, portant de l’intérêt au domaine de l'éducation et au processus de développement global de l'enfant."
        />
      </div>
    </div>
  );
}

export default InfoHome;
