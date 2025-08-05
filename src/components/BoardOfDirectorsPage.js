import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/BoardOfDirectorsPage.css';

function BoardOfDirectorsPage() {
  const { t } = useTranslation();

  return (
    <div className="board-container">
      <h1 className="board-title">{t('board.title', 'Board of Directors')}</h1>

      {/* Board Members Section */}
      <div className="board-members">
        {/* Frieda Bikele - Chairwoman */}
        <div className="board-member">
          <h2 className="member-name">{t('board.frieda.name', 'Frieda Bikele')}</h2>
          <h3 className="member-title">{t('board.frieda.title', 'Chairwoman, AFRHEEC Board of Directors')}</h3>
          
          <p className="board-text">
            {t('board.frieda.bio1', 'Frieda Bikele is a lifelong advocate for equity, inclusion, and social justice, bringing over 20 years of leadership experience across government agencies, international diplomacy, and nonprofit sectors in both Cameroon and the United States. She currently serves as a Service Equity Manager within a government agency, where she leads efforts to dismantle systemic inequities and build inclusive policies that serve diverse and historically marginalized communities.')}
          </p>

          <p className="board-text">
            {t('board.frieda.bio2', 'Fluent in French, Pidgin English, and several African native languages, Frieda\'s global perspective is matched by her deep community roots. She holds a Bachelor\'s degree in Sociology and Communication, as well as dual Master\'s degrees—one in Socio-Anthropology of Health and another in International Studies with a concentration in Public Health Policy. Her academic background, paired with her lived experience as a woman of African descent navigating multiple systems, fuels her powerful and personal approach to advocacy.')}
          </p>

          <p className="board-text">
            {t('board.frieda.bio3', 'As Chairwoman of AFRHEEC, Frieda leads with empathy and clarity of purpose. She is committed to advancing culturally grounded programs that support refugee, immigrant, and African heritage communities—particularly youth and families navigating educational and systemic barriers. Her passion for community connection shows in her outreach work, which includes linking underserved populations to critical resources and uplifting the voices of refugees and asylum seekers.')}
          </p>

          <p className="board-text">
            {t('board.frieda.bio4', 'Raised in Douala, Cameroon and inspired by her mother\'s resilience, Frieda\'s leadership is rooted in values of compassion, justice, and collective empowerment. She envisions a world where every child—regardless of their background—can thrive in systems that honor their identity and potential.')}
          </p>

          <p className="board-text">
            {t('board.frieda.bio5', 'In her free time, Frieda enjoys trail running, backpacking, and building deep connections within her community. She is especially energized by mentoring the next generation and encouraging young leaders to rise together in solidarity and service.')}
          </p>

          <p className="board-text">
            {t('board.frieda.bio6', 'For Frieda, leadership is not just about direction—it\'s about transformation. Her work continues to shape more equitable pathways for those who have been excluded for too long, always guided by a vision of a just and inclusive future.')}
          </p>
        </div>

        {/* Li'a Hammonds - Vice Chairwoman */}
        <div className="board-member">
          <h2 className="member-name">{t('board.lia.name', 'Li\'a Hammonds')}</h2>
          <h3 className="member-title">{t('board.lia.title', 'Vice Chairwoman, AFRHEEC Board of Directors')}</h3>
          
          <p className="board-text">
            {t('board.lia.bio1', 'Li\'a Hammonds is a seasoned public relations and digital media executive whose work is rooted in advancing Justice, Equity, Diversity, and Inclusion (JEDI) across public and private sectors. A trusted voice in strategic communication and cultural leadership, Li\'a is one of the few DEI practitioners worldwide certified to international DEI-ISO standards, positioning her at the forefront of global equity frameworks.')}
          </p>

          <p className="board-text">
            {t('board.lia.bio2', 'With more than a decade of experience shaping narratives, protecting brand integrity, and building equity-centered campaigns, Li\'a brings invaluable strategic insight to AFRHEEC\'s public presence. As Vice Chairwoman and lead communications strategist, she ensures that AFRHEEC\'s messaging honors its mission, resonates with its diverse communities, and uplifts the stories of those it serves through inclusive media practices.')}
          </p>

          <p className="board-text">
            {t('board.lia.bio3', 'Li\'a holds degrees in Communication Studies, a Master of Science in Business Analytics (MSBA), and a Master of Science in Strategic Communications. She is currently pursuing her doctorate, furthering her expertise in equity-driven leadership and organizational transformation. Throughout her dynamic career, she has led gubernatorial campaign messaging, developed crisis communication plans for public safety agencies, advised corporations on DEI strategies, and founded her own agency—Nimble Media Strategies—which supports mission-driven organizations in telling powerful, authentic stories.')}
          </p>

          <p className="board-text">
            {t('board.lia.bio4', 'Currently serving as the Equity Communications Strategist for a government agency, Li\'a also brings a deeply personal commitment to community. She is an advocate for culturally affirming education, racial healing, and the intentional inclusion of historically excluded voices—especially across digital and institutional platforms.')}
          </p>

          <p className="board-text">
            {t('board.lia.bio5', 'Outside of her professional work, Li\'a finds joy in raising her daughters, Xora and Xuri, and serving alongside other leaders to strengthen local community ties. Her work with AFRHEEC is not just professional—it is personal. As a mother, cultural strategist, and equity practitioner, she champions a future where every family has access to opportunity, literacy, and the dignity of being seen and heard.')}
          </p>
        </div>

        {/* Luc René Mbousya - Board Treasurer */}
        <div className="board-member">
          <h2 className="member-name">{t('board.luc.name', 'Luc René Mbousya')}</h2>
          <h3 className="member-title">{t('board.luc.title', 'Board Treasurer')}</h3>
          
          <p className="board-text">
            {t('board.luc.bio1', 'Luc René Mbousya brings over 18 years of diverse experience in supply chain management, financial operations, and data analytics to his role as AFRHEEC\'s Accountant and Board Treasurer. With a career spanning multiple industries—including engine assembly, semiconductor R&D, and inventory management—Luc has developed a strong track record of optimizing business processes and improving operational efficiency.')}
          </p>

          <p className="board-text">
            {t('board.luc.bio2', 'Luc is highly skilled in retail inventory systems, production scheduling, and cross-departmental collaboration. He is proficient in tools such as SAP, Cognos, TeamSupport B2B, Confluence CRM, and forecasting models, and is an expert-level user of Microsoft Excel. His analytical strengths are supported by working knowledge of statistical tools like Minitab, SAS, SPSS, and basic SQL, which he applies to ensure precise financial tracking and data-driven decision-making.')}
          </p>

          <p className="board-text">
            {t('board.luc.bio3', 'At AFRHEEC, Luc plays a critical role in maintaining the organization\'s financial integrity and ensuring responsible stewardship of resources. His business acumen, technical expertise, and deep commitment to equitable community service make him a vital asset to AFRHEEC\'s mission of empowering African heritage families through education and culturally affirming programs.')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BoardOfDirectorsPage; 