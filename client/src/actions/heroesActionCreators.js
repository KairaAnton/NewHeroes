import ACTION_TYPES from './types';
// Create
export const createHero = (data) => ({
    type: ACTION_TYPES.CREATE_HERO,
    data
});

export const createHeroRequest = () => ({
    type: ACTION_TYPES.CREATE_HERO_REQUEST
});

export const createHeroSuccess = (hero) => ({
    type: ACTION_TYPES.CREATE_HERO_SUCCESS,
    hero
});

export const createHeroError = (error) => ({
    type: ACTION_TYPES.CREATE_HERO_ERROR,
    error
});
export const createImage = (data) => ({
    type: ACTION_TYPES.CREATE_HERO,
    data
});

export const createImageRequest = () => ({
    type: ACTION_TYPES.CREATE_HERO_REQUEST
});

export const createImageSuccess = (image) => ({
    type: ACTION_TYPES.CREATE_HERO_SUCCESS,
    image
});

export const createImageError = (error) => ({
    type: ACTION_TYPES.CREATE_HERO_ERROR,
    error
});
// Get
export const getHeroes = (params) => ({
    type: ACTION_TYPES.GET_HEROES,
    params
});

export const getHeroesRequest = () => ({
    type: ACTION_TYPES.GET_HEROES_REQUEST
});

export const getHeroesSuccess = heroes => ({
    type: ACTION_TYPES.GET_HEROES_SUCCESS,
    heroes
});

export const getHeroesError = error => ({
    type: ACTION_TYPES.GET_HEROES_ERROR,
    error
});

export const getHero = (params) => ({
    type: ACTION_TYPES.GET_HERO,
    params
});

export const getHeroRequest = () => ({
    type: ACTION_TYPES.GET_HERO_REQUEST
});

export const getHeroSuccess = hero => ({
    type: ACTION_TYPES.GET_HERO_SUCCESS,
    hero
});

export const getHeroError = error => ({
    type: ACTION_TYPES.GET_HERO_ERROR,
    error
});