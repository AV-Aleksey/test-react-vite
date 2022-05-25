import { useMemo } from 'react';

type UseCarouselLimitReturn = {
    isStartSlider: boolean;
    isEndSlider: boolean;
    shouldGoToEndSlider: boolean;
};

export const useCarouselLimit = (
    activeIdx: number,
    sliderLength: number,
    showSlide: number,
): UseCarouselLimitReturn => {
    const _isStartSlider = useMemo(
        () => activeIdx === 0,
        [showSlide, sliderLength, activeIdx],
    );

    const _isEndSlider = useMemo(
        () => sliderLength - activeIdx - showSlide <= 0,
        [showSlide, sliderLength, activeIdx],
    );

    const _shouldGoToEndSlider = useMemo(
        () => sliderLength - activeIdx - showSlide <= showSlide && !_isEndSlider,
        [showSlide, sliderLength, activeIdx, _isEndSlider],
    );

    return {
        isStartSlider: _isStartSlider,
        isEndSlider: _isEndSlider,
        shouldGoToEndSlider: _shouldGoToEndSlider,
    };
};
