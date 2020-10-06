
    class scroller {

        initClass(el, window) {
            this.options = {
                viewportFactor : 0
            }
            this.window = window;
            this.el = el;
            this._init();
        }

        _init() {
            this.sections = Array.prototype.slice.call( this.el.querySelectorAll( '[data-fct]' ) ).map((el) =>  {
                return {
                    el: el,
                    visible: false
                }
            });
            this.didScroll = false;

            var self = this;
            // the sections already shown...


            var scrollHandler = function() {
                console.log('je scroll')
                    if( !self.didScroll ) {
                        self.didScroll = true;
                        setTimeout( () =>  { self._scrollPage(); }, 60 );
                    }
                },
                resizeHandler = function() {
                    function delayed() {
                        self._scrollPage();
                        self.resizeTimeout = null;
                    }
                    if ( self.resizeTimeout ) {
                        clearTimeout( self.resizeTimeout );
                    }
                    self.resizeTimeout = setTimeout( delayed, 200 );
                };

            this.window.addEventListener( 'scroll', scrollHandler, false );
            this.window.addEventListener( 'resize', resizeHandler, false );

            scrollHandler();
        }

        _scrollPage() {
            var self = this;
            this.sections.forEach( ( item, i ) => {
                let nameAnim = item.el.getAttribute('data-fct');
                let delay = item.el.getAttribute('data-delay');
                if( this.inViewport( item.el, this.options.viewportFactor ) ) {
                    console.log('in viewport')
                    if ( nameAnim && !item.visible) {

                        if ( delay)
                            item.el.style['transition-delay'] =  delay + 'ms'

                        item.el.classList.add('active');

                        this.sections[i].visible = true;
                    }
                }
                else {
                    if ( nameAnim ) {
                        item.el.classList.remove('active');
                        self.sections[i].visible = false;
                    }
                }
            });
            this.didScroll = false;
        }


         getViewportH() {
            var client = this.getDocument()['clientHeight'],
                inner = this.window['innerHeight'];

            if( client < inner )
                return inner;
            else
                return client;
        }

         scrollY() {
            return this.window.pageYOffset || this.getDocument().scrollTop;
        }

         getOffset( el ) {
            var offsetTop = 0, offsetLeft = 0;
            do {
                if ( !isNaN( el.offsetTop ) ) {
                    offsetTop += el.offsetTop;
                }
                if ( !isNaN( el.offsetLeft ) ) {
                    offsetLeft += el.offsetLeft;
                }
            } while( el = el.offsetParent )

            return {
                top : offsetTop,
                left : offsetLeft
            }
        }

         inViewport( el, h ) {
            var elH = el.offsetHeight,
                scrolled = this.scrollY(),
                viewed = scrolled + this.getViewportH(),
                elTop = this.getOffset(el).top,
                elBottom = elTop + elH,
                // if 0, the element is considered in the viewport as soon as it enters.
                // if 1, the element is considered in the viewport only when it's fully inside
                // value in percentage (1 >= h >= 0)
                h = h || 0;

            return (elTop + elH * h) <= viewed && (elBottom) >= scrolled;
        }

         getDocument() {
            return this.window.document.documentElement;
        }

         extend( a, b ) {
            for( var key in b ) {
                if( b.hasOwnProperty( key ) ) {
                    a[key] = b[key];
                }
            }
            return a;
        }
    }

    export default new scroller();
