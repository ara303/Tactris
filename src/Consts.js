'use strict';
/*
* Curves:
*/
//linear easeIn easeOut easeInOut easeOutBounce spring inQuad outQuad inOutQuad inCubic outCubic inOutCubic inQuart outQuart inOutQuart inQuint outQuint inOutQuint inSine outSine inOutSine inExpo outExpo inOutExpo inCirc outCirc inOutCirc inElastic outElastic inOutElastic inBack outBack inOutBack inBounce outBounce inOutBounce


export default {
	isDOM: false, // canvas || dom

	DOT_SIZE: 36,
	DOT_MARGIN: 1,

	CELL_RATIO: 0.6,
	CELL_MARGIN: 1,

	DIMENSION: 12,
	DURATION: 600,
	CURVE: 'outBounce',
	FIGURES: [
		[
			{//             ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 0 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 1 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 0 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 0 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 1 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 2 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 3 //     ║      ║                               //
			} //            ╚══════╝                               //
		],

		[
			{//             ╔══════╗ ╔══════╗ ╔══════╗ ╔══════╗    //
				x: 0, //    ║      ║ ║      ║ ║      ║ ║      ║    //
				y: 0 //     ║      ║ ║      ║ ║      ║ ║      ║    //
			}, //           ╚══════╝ ╚══════╝ ╚══════╝ ╚══════╝    //
			{ //                                                   //
				x: 1, //                                           //
				y: 0 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 0 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 3, //                                           //
				y: 0 //                                            //
			} //                                                   //
		],


		[
			{//                      ╔══════╗ ╔══════╗             //
				x: 0, //             ║      ║ ║      ║             //
				y: 1 //              ║      ║ ║      ║             //
			}, //                    ╚══════╝ ╚══════╝             //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 1, //    ║      ║ ║      ║                      //
				y: 0 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 0 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 0 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 1 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                     ╔══════╗                      //
				x: 1, //             ║      ║                      //
				y: 1 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 2 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 0 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                     ╔══════╗ ╔══════╗             //
				x: 1, //             ║      ║ ║      ║             //
				y: 0 //              ║      ║ ║      ║             //
			}, //                    ╚══════╝ ╚══════╝             //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],

		[
			{//                      ╔══════╗                      //
				x: 0, //             ║      ║                      //
				y: 1 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 2 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //            ╔══════╗                               //
				x: 1, //    ║      ║                               //
				y: 0 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],


		[
			{//                      ╔══════╗                      //
				x: 0, //             ║      ║                      //
				y: 1 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //            ╔══════╗ ╔══════╗ ╔══════╗             //
				x: 1, //    ║      ║ ║      ║ ║      ║             //
				y: 0 //     ║      ║ ║      ║ ║      ║             //
			}, //           ╚══════╝ ╚══════╝ ╚══════╝             //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 0 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 1 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 2 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗ ╔══════╗ ╔══════╗             //
				x: 0, //    ║      ║ ║      ║ ║      ║             //
				y: 0 //     ║      ║ ║      ║ ║      ║             //
			}, //           ╚══════╝ ╚══════╝ ╚══════╝             //
			{ //                     ╔══════╗                      //
				x: 1, //             ║      ║                      //
				y: 0 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 0 //                                            //
			} //                                                   //
		],

		[
			{//                      ╔══════╗                      //
				x: 0, //             ║      ║                      //
				y: 1 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 1, //    ║      ║ ║      ║                      //
				y: 0 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                     ╔══════╗                      //
				x: 1, //             ║      ║                      //
				y: 1 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 2 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 0 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗ ╔══════╗ ╔══════╗             //
				x: 0, //    ║      ║ ║      ║ ║      ║             //
				y: 1 //     ║      ║ ║      ║ ║      ║             //
			}, //           ╚══════╝ ╚══════╝ ╚══════╝             //
			{ //                                                   //
				x: 1, //                                           //
				y: 1 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 0 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 1 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 2 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //                                                   //
				x: 1, //                                           //
				y: 0 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗ ╔══════╗ ╔══════╗             //
				x: 0, //    ║      ║ ║      ║ ║      ║             //
				y: 0 //     ║      ║ ║      ║ ║      ║             //
			}, //           ╚══════╝ ╚══════╝ ╚══════╝             //
			{ //                              ╔══════╗             //
				x: 1, //                      ║      ║             //
				y: 0 //                       ║      ║             //
			}, //                             ╚══════╝             //
			{ //                                                   //
				x: 2, //                                           //
				y: 0 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],

		[
			{//                      ╔══════╗                      //
				x: 0, //             ║      ║                      //
				y: 2 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //                     ╔══════╗                      //
				x: 1, //             ║      ║                      //
				y: 0 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 1, //    ║      ║ ║      ║                      //
				y: 1 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 2 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗ ╔══════╗ ╔══════╗             //
				x: 0, //    ║      ║ ║      ║ ║      ║             //
				y: 0 //     ║      ║ ║      ║ ║      ║             //
			}, //           ╚══════╝ ╚══════╝ ╚══════╝             //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 1 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //                                                   //
				x: 1, //                                           //
				y: 0 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 0 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 0 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                     ╔══════╗                      //
				x: 1, //             ║      ║                      //
				y: 0 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //                     ╔══════╗                      //
				x: 1, //             ║      ║                      //
				y: 1 //              ║      ║                      //
			}, //                    ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 2 //                                            //
			} //                                                   //
		],

		[
			{//                               ╔══════╗             //
				x: 0, //                      ║      ║             //
				y: 1 //                       ║      ║             //
			}, //                             ╚══════╝             //
			{ //            ╔══════╗ ╔══════╗ ╔══════╗             //
				x: 1, //    ║      ║ ║      ║ ║      ║             //
				y: 1 //     ║      ║ ║      ║ ║      ║             //
			}, //           ╚══════╝ ╚══════╝ ╚══════╝             //
			{ //                                                   //
				x: 2, //                                           //
				y: 0 //                                            //
			}, //                                                  //
			{ //                                                   //
				x: 2, //                                           //
				y: 1 //                                            //
			} //                                                   //
		],

		[
			{//             ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 0 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗                               //
				x: 0, //    ║      ║                               //
				y: 1 //     ║      ║                               //
			}, //           ╚══════╝                               //
			{ //            ╔══════╗ ╔══════╗                      //
				x: 0, //    ║      ║ ║      ║                      //
				y: 2 //     ║      ║ ║      ║                      //
			}, //           ╚══════╝ ╚══════╝                      //
			{ //                                                   //
				x: 1, //                                           //
				y: 2 //                                            //
			} //                                                   //
		]
	],

	FIGURESCOUNT: 2,

	DOT_STATE__HOVERED: 1,
	DOT_STATE__UNTOUCHED: 0,
	DOT_STATE__PLACED: -1,

	//'#7ac74f' '#a1cf6b' '#d5d887' '#e0c879' '#e87461'
	//#d5d887 + rgba(0,0,0,.2) = #ABAD6C
	//#e87461 + rgba(0,0,0,.2) = #BA5D4E
	DOT_COLOR__HOVERED: 'linear-gradient(45deg, #333 0%, #333 25%, #e87461 25%, #e87461 100%)',
	DOT_COLOR__UNTOUCHED: '#7ac74f',
	DOT_COLOR__PLACED: 'linear-gradient(135deg, #d5d887 0%, #d5d887 75%, #333 75%, #333 100%)',

	DOT_COLOR__CANVAS___HOVERED: '#e87461',
	DOT_COLOR__CANVAS___UNTOUCHED: '#7ac74f',
	DOT_COLOR__CANVAS___PLACED: '#d5d887',
	DOT_COLOR__CANVAS___DURATION: 600,
	DOT_COLOR__CANVAS___CURVE: 'inOutQuint',


	DOT_CURVE__POSITION: 'inOutElastic',
	DOT_DURATION__POSITION: 800,

	DOT_CURVE__ROTATION: 'outCubic',
	DOT_DURATION__ROTATION: 800,

	SCORE__FIGURE: 2,
	SCORE__SURCHARGE: 0.8,

	MODAL_CURVE: 'outBounce',
	MODAL_DURATION: 1200,

	MUTE: false,

	init: function () {
		if (location.search) {
			let qs = {};
			location.search.replace(/^\?/, '').split('&').map((param) => {
				let [name, value] = param.split('=');
				qs[name] = value;
			});

			if (qs.s) {
				let dimension = parseInt(qs.s, 10);
				if (dimension % 2 !== 0) {
					dimension++;
				}
				this.DIMENSION = dimension;
			}

			if (qs.mute === 'off') {
				this.MUTE = false;
			} else if (qs.mute === 'on') {
				this.MUTE = true;
			}
		}
		var w = document.body.clientWidth;
		var h = document.body.clientHeight;
		this.WIDTH = w;
		this.HEIGHT = h;
		var vmin = w > h ? h : w;
		if (vmin / this.DIMENSION < this.DOT_SIZE) {
			this.DOT_SIZE = vmin / this.DIMENSION - this.DOT_MARGIN;
		}
		this.GAME_OFFSET__X = (w - this.DOT_SIZE * this.DIMENSION) / 2;
		this.GAME_OFFSET__Y = (h - this.DOT_SIZE * this.DIMENSION) / 2;

		this.CELL_SIZE = this.DOT_SIZE * this.CELL_RATIO;
		this.DOT_SIDE = this.DOT_SIZE + this.DOT_MARGIN;
		this.CELL_SIDE = this.CELL_SIZE + this.CELL_MARGIN;
		this.ROWS = this.DIMENSION;
		this.COLUMNS = this.DIMENSION;

		this.SCORE__LINE = this.DIMENSION;
		return this;
	}

}.init();
