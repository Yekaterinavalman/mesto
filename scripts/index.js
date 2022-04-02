const initialCards = [{
        name: 'Бочка',
        link: 'https://www.notion.so/image/https%3'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const popupEditWrap = document.querySelector('.popup_type_edit');
const popupButton = document.querySelector('.profile__edit-button');
const popupButtonClose = document.querySelector('.popup__button-close');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__information');
const popupForm = popup.querySelector('.popup__form');
const popupName = document.querySelector('.popup__input_name_name');
const popupJob = document.querySelector('.popup__input_name_profession');


const popupAdd = document.querySelector('.popup_type_add');
const popupAddButton = document.querySelector('.profile__add-button');
const popupAddButtonClose = popupAdd.querySelector('.popup__button-close');
const popupAddForm = popupAdd.querySelector('.popup__form');


const popupFullImage = document.querySelector('.popup_type_image');
const popupFullImageImage = popupFullImage.querySelector('.popup__image');
const popupFullImageTitle = popupFullImage.querySelector('.popup__title-image');
const popupFullImageClose = popupFullImage.querySelector('.popup__button-close');

const  openPopup = (popup) =>  {
    popup.classList.add('popup_opened');
}


function closePopup(popup) {
    popup.classList.remove('popup_opened');
}


popupButton.addEventListener('click', () => {
    openPopup(popupEditWrap)
});
popupAddButton.addEventListener('click', () => {
    openPopup(popupAdd)
});

popupButtonClose.addEventListener('click', () => {
    closePopup(popupEditWrap)
});
popupAddButtonClose.addEventListener('click', () => {
    closePopup(popupAdd);
});
popupFullImageClose.addEventListener('click', () => {
    closePopup(popupFullImage);
})


popupButton.addEventListener('click', function() {
    openPopup(popupEditWrap);
    popupName.value =  profileName.textContent;
    popupJob.value =  profileJob.textContent;
});


function  submitProfileForm(event)  {
    event.preventDefault();
    profileName.textContent  =  popupName.value;
    profileJob.textContent  =  popupJob.value;
    closePopup(popup);
}


popupForm.addEventListener('submit',  submitProfileForm);


const popupImage = document.querySelector('.popup_type_image');
const popupImageClose = popupImage.querySelector('.popup__button-close');
const popupImageImage = popupImage.querySelector('.popup__image');
const popupImageTitle = popupImage.querySelector('.popup__title-image');
const titleCardInput = popupAdd.querySelector('.popup__input_name_title-card');
const linkCardInput = popupAdd.querySelector('.popup__input_name_link-card');

const photoCard = document.querySelector('.grid-places');

const formSubmitAddHandler = (event) => {
    event.preventDefault();
    const titleCardSubmit = titleCardInput.value;
    const linkCardSubmit = linkCardInput.value;
    renderCard(createCard(titleCardSubmit, linkCardSubmit));
    closePopup(popupAdd);
    popupAddForm.reset();
}




function createCard(titleCardSubmit, linkCardSubmit) {
    const templateCard = document.querySelector('#grid-template').content.querySelector('.grid-item');
    const templateCardElement = templateCard.cloneNode(true);
    const templateCardTitle = templateCardElement.querySelector('.grid-item__name');
    const templateCardImage = templateCardElement.querySelector('.grid-item__photo');
    const addlikeButton = templateCardElement.querySelector('.grid-item__like');
    const addImage = templateCardElement.querySelector('.grid-item__photo');
    const addDeleteIcon = templateCardElement.querySelector('.grid-item__delete-icon');


    addlikeButton.addEventListener('click', function() {
        addlikeButton.classList.toggle('grid-item__like_liked');
    })

    addDeleteIcon.addEventListener('click', function() {
        addDeleteIcon.closest('.grid-item').remove();
    })

    addImage.addEventListener('click', function() {
        openPopup(popupFullImage);
        popupFullImageImage.src = linkCardSubmit;
        popupFullImageImage.alt = linkCardSubmit;
        popupFullImageTitle.textContent = titleCardSubmit;
    });
    templateCardTitle.textContent = titleCardSubmit;
    templateCardImage.src = linkCardSubmit;
    templateCardImage.textContent = linkCardSubmit;
    return templateCardElement;
}


function renderCard(card) {
    photoCard.prepend(card);
}


popupAddForm.addEventListener('submit', formSubmitAddHandler);


const initialTemplate = initialCards.forEach(item => {
    renderCard(createCard(item.name, item.link));
});