
const hand = document.querySelector('.jsWaveHand')

const wave = hand => {
  const tl = new TimelineMax({});
  tl.set(hand, { transformOrigin: 'bottom center' });
  tl.from(hand, 0.5, { scale: 0.5, opacity: 0, ease: Back.easeOut.config(1.5),}, '+=0.05');
  tl.to(hand,0.2, {rotation: 15})
  tl.to(hand,0.2, {rotation: -15})
  tl.to(hand,0.2, {rotation: 15})
  tl.to(hand,0.2, {rotation: -15})
  tl.to(hand,0.2, {rotation: 0})
};

const openModal = _ => {
  document.body.classList.add('modal-is-open');
  wave(hand);
};
const closeModal = _ => document.body.classList.remove('modal-is-open')

const openButton = document.querySelector('.jsModalToggle');
openButton.addEventListener('click', openModal )

const closeButton = document.querySelector('.jsModalClose');
closeButton.addEventListener('click', closeModal )

const overlay = document.querySelector('.jsModalContainer');
overlay.addEventListener('click', closeModal )

const modal = document.querySelector('.jsModal');
modal.addEventListener('click', e => e.stopPropagation())
