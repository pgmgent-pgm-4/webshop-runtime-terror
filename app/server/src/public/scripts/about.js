(() => {
  const app = {
    initialize () {
      this.cacheElements();
      this.registerEventListeners();
    },
    cacheElements () {
      this.aboutSegmentedControl = document.querySelector('.about__segmented-control');
      this.aboutSegmentedControlSelected = document.querySelector('.about__segmented-control__selected');
      this.aboutSegmentedControlStory = document.querySelector('.about__segmented-control__story');
      this.aboutSegmentedControlMission = document.querySelector('.about__segmented-control__mission');
      this.aboutStory = document.querySelector('.about-story');
      this.aboutMission = document.querySelector('.about-mission');

    },
    registerEventListeners () {
      if (this.aboutSegmentedControl !== null) {
        this.aboutSegmentedControl.addEventListener('click', (e) => {
          this.aboutStory.classList.toggle('about-story--not-active');
          this.aboutMission.classList.toggle('about-mission--active');
          this.aboutSegmentedControlSelected.classList.toggle('about__segmented-control__selected--mission');
          this.aboutSegmentedControlStory.classList.toggle('about__segmented-control__story--about-not-active');
          this.aboutSegmentedControlMission.classList.toggle('about__segmented-control__mission--about-active');
          
        });
      };
    },
  };
  app.initialize();
})();