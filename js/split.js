'use strict';
;
{
    (function () {
        var runAnimation = function runAnimation(self, other) {
            if (self.classList.contains('active'))
                return;
            activeTypes.forEach(function (item) {
                return other.classList.remove(item);
            });
            self.classList.remove('ready');
            var activeType = activeTypes[Math.random() * activeTypes.length | 0];
            self.classList.add('active');
            self.classList.add(activeType);
        };
        var animationEnd = function animationEnd(self, other) {
            self.classList.add('behind');
            self.classList.remove('active');
            activeTypes.forEach(function (item) {
                return self.classList.remove(item);
            });
            other.classList.remove('behind');
            other.classList.add('ready');
        };
        var $front = document.querySelector('.front'), $back = document.querySelector('.back'), activeTypes = [
                'active--1',
                'active--2',
                'active--3'
            ];
        (function renderTheTextToThePage() {
            var frontText = $front.getAttribute('data-text'), backText = $back.getAttribute('data-text'), $frontTexts = [].slice.call($front.querySelectorAll('.text')), $backTexts = [].slice.call($back.querySelectorAll('.text'));
            $frontTexts.forEach(function (item) {
                return item.textContent = frontText;
            });
            $backTexts.forEach(function (item) {
                return item.textContent = backText;
            });
        }());
        $front.addEventListener('click', function (e) {
            return runAnimation($front, $back);
        });
        $back.addEventListener('click', function (e) {
            return runAnimation($back, $front);
        });
        $front.addEventListener('transitionend', function (e) {
            return animationEnd($front, $back);
        }, false);
        $back.addEventListener('transitionend', function (e) {
            return animationEnd($back, $front);
        }, false);
        if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', function () {
                FastClick.attach(document.body);
            }, false);
        }
    }());
}
;