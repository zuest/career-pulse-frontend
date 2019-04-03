'use strict';

var fetchData = function () {
    console.log("LOLOLOLOLOLOLOLOLOLOl")
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res, obj;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return fetch('careerAr.json');

                    case 2:
                        res = _context.sent;
                        _context.next = 5;
                        return res.json();

                    case 5:
                        res = _context.sent;
                        obj = res;
                        return _context.abrupt('return', obj);

                    case 8:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function fetchData() {
        return _ref.apply(this, arguments);
    };
}();

// please refer to the following https://stackoverflow.com/questions/46078328/change-ids-of-child-elements-in-javascript-when-cloning-an-element


function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var currentDataId = 0;
var rowCounter = 0;

function rotateCard(btn) {
    var $card = $(btn).closest('.card-container');
    console.log($card);
    if ($card.hasClass('hover')) {
        console.log("1");
        $card.removeClass('hover');
    } else {
        console.log("2");
        $card.addClass('hover');
    }
}

function AddRowAndLoad() {
    try {

        fetchData().then(function (data) {

            data.reverse();
            var original = document.getElementById('profile-row' + rowCounter);
            var clone = original.cloneNode(true); // true means clone all childNodes and all event handlers
            rowCounter++;
            clone.id = "profile-row" + rowCounter;

            if (data[currentDataId + 1] == null) {
                //if second column is empty only fill 1 columns
                console.log("1");
                clone.getElementsByClassName('row3')[0].innerHTML = null;
                clone.getElementsByClassName('row2')[0].innerHTML = null;
                for (var j = 0; j < 10; j++) {
                    if (clone.getElementsByClassName('hover')[j] != null) {
                        console.log(clone.getElementsByClassName('hover')[j].classList.remove('hover'));
                    }
                }

                for (var i = 0; i < 1; i++) {
                    clone.getElementsByClassName('qu-title')[i].id = 't' + (currentDataId + i + 1);
                    clone.getElementsByClassName('qu-title')[i].innerHTML = data[currentDataId + i].title;

                    clone.getElementsByClassName('imagery')[i].id = 'img' + (currentDataId + i + 1); //front title
                    clone.getElementsByClassName('imagery')[i].src = data[currentDataId + i].selectedEvent;

                    clone.getElementsByClassName('profession')[i].id = 'd' + (currentDataId + i + 1); //front date
                    clone.getElementsByClassName('profession')[i].innerHTML = data[currentDataId + i].date;

                    clone.getElementsByClassName('qu-backtitle')[i].id = 'tb' + (currentDataId + i + 1); //back title
                    clone.getElementsByClassName('qu-backtitle')[i].innerHTML = data[currentDataId + i].title;

                    clone.getElementsByClassName('mainContent')[i].id = 'c' + (currentDataId + i + 1);
                    clone.getElementsByClassName('mainContent')[i].innerHTML = data[currentDataId + i].content;
                }
                currentDataId = currentDataId + 3;
                original.parentNode.appendChild(clone);
            } else if (data[currentDataId + 2] == null) {
                //if third column is empty only fill 2 columns
                clone.getElementsByClassName('row3')[0].innerHTML = null;

                for (var _j = 0; _j < 10; _j++) {
                    if (clone.getElementsByClassName('hover')[_j] != null) {
                        console.log(clone.getElementsByClassName('hover')[_j].classList.remove('hover'));
                    }
                }

                for (var _i = 0; _i < 2; _i++) {
                    clone.getElementsByClassName('qu-title')[_i].id = 't' + (currentDataId + _i + 1);
                    clone.getElementsByClassName('qu-title')[_i].innerHTML = data[currentDataId + _i].title;

                    clone.getElementsByClassName('imagery')[_i].id = 'img' + (currentDataId + _i + 1); //front title
                    clone.getElementsByClassName('imagery')[_i].src = data[currentDataId + _i].selectedEvent;

                    clone.getElementsByClassName('profession')[_i].id = 'd' + (currentDataId + _i + 1); //front date
                    clone.getElementsByClassName('profession')[_i].innerHTML = data[currentDataId + _i].date;

                    clone.getElementsByClassName('qu-backtitle')[_i].id = 'tb' + (currentDataId + _i + 1); //back title
                    clone.getElementsByClassName('qu-backtitle')[_i].innerHTML = data[currentDataId + _i].title;

                    clone.getElementsByClassName('mainContent')[_i].id = 'c' + (currentDataId + _i + 1);
                    clone.getElementsByClassName('mainContent')[_i].innerHTML = data[currentDataId + _i].content;
                }
                currentDataId = currentDataId + 3;
                original.parentNode.appendChild(clone);
            } else {
                for (var _i2 = 0; _i2 < 3; _i2++) {

                    for (var _j2 = 0; _j2 < 10; _j2++) {
                        if (clone.getElementsByClassName('hover')[_j2] != null) {
                            console.log(clone.getElementsByClassName('hover')[_j2].classList.remove('hover'));
                        }
                    }

                    clone.getElementsByClassName('qu-title')[_i2].id = 't' + (currentDataId + _i2 + 1);
                    clone.getElementsByClassName('qu-title')[_i2].innerHTML = data[currentDataId + _i2].title;

                    clone.getElementsByClassName('imagery')[_i2].id = 'img' + (currentDataId + _i2 + 1); //front title
                    clone.getElementsByClassName('imagery')[_i2].src = data[currentDataId + _i2].selectedEvent;

                    clone.getElementsByClassName('profession')[_i2].id = 'd' + (currentDataId + _i2 + 1); //front date
                    clone.getElementsByClassName('profession')[_i2].innerHTML = data[currentDataId + _i2].date;

                    clone.getElementsByClassName('qu-backtitle')[_i2].id = 'tb' + (currentDataId + _i2 + 1); //back title
                    clone.getElementsByClassName('qu-backtitle')[_i2].innerHTML = data[currentDataId + _i2].title;

                    clone.getElementsByClassName('mainContent')[_i2].id = 'c' + (currentDataId + _i2 + 1);
                    clone.getElementsByClassName('mainContent')[_i2].innerHTML = data[currentDataId + _i2].content;
                }
                currentDataId = currentDataId + 3;
                original.parentNode.appendChild(clone);
            }
        });
    } catch (err) {
        document.getElementById('loadBtn').style.visibility = 'hidden'; // once an error thrown we hide the load button, which means no more data to show
        console.log(err);
    }
}

window.onload = function () {
    fetchData().then(function (data) {
        data.reverse();
        document.getElementsByClassName('qu-title')[0].innerHTML = data[currentDataId].title;
        document.getElementsByClassName('qu-title')[1].innerHTML = data[currentDataId + 1].title;
        document.getElementsByClassName('qu-title')[2].innerHTML = data[currentDataId + 2].title;

        document.getElementsByClassName('profession')[0].innerHTML = data[currentDataId].date;
        document.getElementsByClassName('profession')[1].innerHTML = data[currentDataId + 1].date;
        document.getElementsByClassName('profession')[2].innerHTML = data[currentDataId + 2].date;

        document.getElementsByClassName('qu-backtitle')[0].innerHTML = data[currentDataId].title;
        document.getElementsByClassName('qu-backtitle')[1].innerHTML = data[currentDataId + 1].title;
        document.getElementsByClassName('qu-backtitle')[2].innerHTML = data[currentDataId + 2].title;

        document.getElementsByClassName('imagery')[0].src = data[currentDataId].selectedEvent;
        document.getElementsByClassName('imagery')[1].src = data[currentDataId + 1].selectedEvent;
        document.getElementsByClassName('imagery')[2].src = data[currentDataId + 2].selectedEvent;

        document.getElementsByClassName('mainContent')[0].innerHTML = data[currentDataId].content;
        document.getElementsByClassName('mainContent')[1].innerHTML = data[currentDataId + 1].content;
        document.getElementsByClassName('mainContent')[2].innerHTML = data[currentDataId + 2].content;

        currentDataId = currentDataId + 3;
    });
};