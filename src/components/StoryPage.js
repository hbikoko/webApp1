import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/StoryPage.css';

function StoryPage() {
  const { t } = useTranslation();

  return (
    <div className="story-container">
      <h1 className="story-title">{t('story.header', 'Story Page')}</h1>

      <p className="story-text">
        {t('story.text1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis risus ut elit pulvinar vulputate. Etiam congue elit non justo tempor sagittis...')}
      </p>

      <p className="story-text">
        {t('story.text2', 'Maecenas eu nisi lobortis, dignissim magna eget, placerat dui. Curabitur tempor vulputate felis sit amet scelerisque...')}
      </p>

      {/* Continue with additional paragraphs wrapped in t('story.textX') */}
      <p className="story-text">
        {t('story.text3', 'Phasellus ullamcorper, est quis efficitur finibus, leo orci pulvinar felis, eget consectetur nisi nulla quis lacus...')}
      </p>
      
      <p className="story-text">
        {t('story.text4', 'Cras ultricies ligula sed magna dictum porta. Nulla porttitor accumsan tincidunt...')}
      </p>
      
      <p className="story-text">
        {t('story.text5', 'Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui...')}
      </p>
      
      <p className="story-text">
        {t('story.text6', 'Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem...')}
      </p>
      
      <p className="story-text">
        {t('story.text7', 'Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat...')}
      </p>
      
      <p className="story-text">
        {t('story.text8', 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Pellentesque in ipsum id orci porta dapibus...')}
      </p>
    </div>
  );
}

export default StoryPage;

