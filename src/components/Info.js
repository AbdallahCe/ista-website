import "./InfoStyles.css";
import InfoData from "./InfoData";
import Info1 from "../assets/digital.jpg";
import Info2 from "../assets/gestion.jpg";
import Info3 from "../assets/servicePersonne.jpg";

function Info() {
  return (
    <div className="info">
      <h1>Les filières assurées à cet établissement</h1>
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
          image={Info1}
          heading="Infrastructure Digitale"
          text="Le tronc commun en infrastructure digitale est une  étape cruciale qui vise à former des stagiares pour concevoir, administrer, optimiser, et sécuriser des architectures et infrastructures IT.
Au cours de cette étape, qui dure une année de formation professionnelle, les stagiaires suivent une formation qui a la vocation de répondre à deux types de compétences :
- compétences transversales :Les langues ,l' entrepreneuriat,  Compétences comportementales et sociales,  Culture et techniques avancées du numérique.
- compétences techniques : Comprendre les enjeux d'un système d'information , Concevoir un réseau informatique  , Maîtriser le fonctionnement d'un système d'exploitation  , Gérer une infrastructure virtualisée ,,, etc"
        />
        <InfoData
          image={Info2}
          heading="Assistant Administratif option Commerce"
          text="Un Assistant administratif option commerce intervient dans une démarche commerciale active et qui dispose des compétences professionnelles nécessaires pour exercer les activités suivantes : la prospection, la négociation commerciale, la vente et la fidélisation de la clientèle, l’animation d’une surface de vente et les tâches de la gestion, dans le but de développer les ventes de l’entreprise. Ces activités s’exercent dans toutes les entreprises industrielles, commerciales et de service de toutes tailles afin de mettre à la disposition de la clientèle les produits/services correspondant à sa demande."
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

export default Info;
