import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import AfricaMap from './AfricaMap';
import './styles/HeritageHistoryPage.css';

function HeritageHistoryPage() {
  const { t } = useTranslation();

  return (
    <div className="heritage-page">
      <Helmet>
        <title>{t('heritage.pageTitle', 'African Heritage and History')}</title>
      </Helmet>

      {/* Map placed directly without container div */}
      <AfricaMap />

      {/* Content section with all paragraphs */}
      <div className="heritage-content">
        <h1>{t('heritage.header', 'African Heritage and History: A Journey of Resilience, Identity, and Transformation')}</h1>
        <h2>{t('heritage.subheader', 'The Unbroken Thread of African Civilization')}</h2>
        <p>
          {t(
            'heritage.paragraph1',
            "The story of African heritage is a narrative of extraordinary complexity, depth, and resilience that spans millennia. Long before European colonization, the African continent was home to some of the world's most advanced civilizations. From the magnificent kingdoms of Mali and Zimbabwe to the scientific and mathematical achievements of ancient Egypt, Africa was a cradle of human innovation, cultural sophistication, and profound social organization."
          )}
        </p>
        <h2>{t('heritage.section2', 'The Traumatic Passage: Forced Migration and Enslavement')}</h2>
        <p>
          {t(
            'heritage.paragraph2',
            "The transatlantic slave trade represents one of the most devastating chapters in human history. Between the 15th and 19th centuries, approximately 12.5 million Africans were forcibly removed from their homelands, with roughly 10.7 million surviving the brutal middle passage to the Americas. This was not merely a movement of bodies, but a systematic destruction of cultures, families, and identities."
          )}
        </p>
        <p>
          {t(
            'heritage.paragraph3',
            "Africans were violently stripped of their languages, spiritual practices, familial structures, and cultural identities. Enslaved people were deliberately separated from those who spoke the same languages, making cultural preservation almost impossible. Yet, despite this systematic oppression, African people maintained remarkable forms of resistance and cultural preservation."
          )}
        </p>
        <h2>{t('heritage.section3', 'Preservation of Culture: Resistance and Resilience')}</h2>
        <p>
          {t(
            'heritage.paragraph4',
            "Throughout the Americas, from Brazil to the United States, enslaved Africans and their descendants found extraordinary ways to preserve and transform their cultural heritage. Spiritual practices like Vodou in Haiti, Santería in Cuba, and Candomblé in Brazil are powerful examples of how African religious traditions were maintained and adapted. Musical traditions, from blues and jazz to samba and reggae, represent profound cultural continuities that trace directly back to African musical roots."
          )}
        </p>
        <h2>{t('heritage.section4', 'The Importance of Historical Understanding')}</h2>
        <p>
          {t('heritage.paragraph5', "Understanding African heritage is crucial for several fundamental reasons:")}
        </p>
        <ol>
          <li>{t('heritage.reason1', "Psychological Liberation: Knowing the depth and complexity of African civilizations before colonization is a powerful antidote to narratives of Black inferiority.")}</li>
          <li>{t('heritage.reason2', "Systemic Transformation: Recognizing historical mechanisms of oppression allows targeted strategies for liberation.")}</li>
          <li>{t('heritage.reason3', "Cultural Identity and Pride: Understanding ancestral history fosters continuity, dignity, and collective strength.")}</li>
          <li>{t('heritage.reason4', "Global Interconnectedness: African contributions have been foundational to human progress.")}</li>
        </ol>
        <h2>{t('heritage.section5', 'Practical Implications for Modern Transformation')}</h2>
        <p>
          {t('heritage.paragraph6', "Exploring African heritage is not an academic exercise but a critical strategy for collective empowerment. By understanding historical contexts, Black communities can develop educational curricula, create economic strategies, build solidarity networks, challenge systemic racism, and foster psychological healing.")}
        </p>
        <h2>{t('heritage.section6', 'Conclusion: An Ongoing Journey')}</h2>
        <p>
          {t('heritage.paragraph7', "The exploration of African heritage is about creating a more just and equitable future—a continuous process of rediscovery, healing, and transformation. Every story recovered, every tradition remembered, and every historical truth acknowledged is an act of resistance and restoration.")}
        </p>
      </div>
    </div>
  );
}

export default HeritageHistoryPage;