(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    [
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        function (e, t, a) {
            e.exports = a(25);
        },
        ,
        ,
        ,
        ,
        function (e, t, a) {},
        ,
        function (e, t, a) {},
        ,
        function (e, t, a) {},
        ,
        function (e, t, a) {},
        ,
        function (e, t, a) {},
        ,
        function (e, t, a) {
            'use strict';
            a.r(t);
            var n = a(0),
                s = a.n(n),
                i = a(8),
                c = a.n(i),
                r = (a(15), a(1)),
                l = a(2),
                o = a(4),
                u = a(3),
                m = a(5),
                p = a(9),
                d = a(6),
                h =
                    (a(17),
                    (function (e) {
                        function t(e) {
                            var a;
                            return (
                                Object(r.a)(this, t),
                                ((a = Object(o.a)(
                                    this,
                                    Object(u.a)(t).call(this, e)
                                )).handleClick = a.handleClick.bind(
                                    Object(d.a)(Object(d.a)(a))
                                )),
                                a
                            );
                        }
                        return (
                            Object(m.a)(t, e),
                            Object(l.a)(t, [
                                {
                                    key: 'handleClick',
                                    value: function (e) {
                                        this.props.flipCellsAroundMe();
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function () {
                                        var e =
                                            'Cell' +
                                            (this.props.isLit
                                                ? ' Cell-lit'
                                                : '');
                                        return s.a.createElement('td', {
                                            className: e,
                                            onClick: this.handleClick,
                                        });
                                    },
                                },
                            ]),
                            t
                        );
                    })(n.Component)),
                f =
                    (a(19),
                    (function (e) {
                        function t(e) {
                            var a;
                            return (
                                Object(r.a)(this, t),
                                ((a = Object(o.a)(
                                    this,
                                    Object(u.a)(t).call(this, e)
                                )).state = {
                                    hasWon: !1,
                                    board: a.createBoard(),
                                }),
                                a
                            );
                        }
                        return (
                            Object(m.a)(t, e),
                            Object(l.a)(t, [
                                {
                                    key: 'createBoard',
                                    value: function () {
                                        for (
                                            var e = [], t = 0;
                                            t < this.props.nrows;
                                            t++
                                        ) {
                                            for (
                                                var a = [], n = 0;
                                                n < this.props.ncols;
                                                n++
                                            )
                                                a.push(
                                                    Math.random() <
                                                        this.props
                                                            .chanceLightStartsOn
                                                );
                                            e.push(a);
                                        }
                                        return e;
                                    },
                                },
                                {
                                    key: 'flipCellsAround',
                                    value: function (e) {
                                        var t = this.props,
                                            a = t.ncols,
                                            n = t.nrows,
                                            s = this.state.board,
                                            i = e.split('-').map(Number),
                                            c = Object(p.a)(i, 2),
                                            r = c[0],
                                            l = c[1];
                                        function o(e, t) {
                                            t >= 0 &&
                                                t < a &&
                                                e >= 0 &&
                                                e < n &&
                                                (s[e][t] = !s[e][t]);
                                        }
                                        o(r, l),
                                            o(r, l - 1),
                                            o(r, l + 1),
                                            o(r - 1, l),
                                            o(r + 1, l);
                                        var u = s.every(function (e) {
                                            return e.every(function (e) {
                                                return !e;
                                            });
                                        });
                                        this.setState({ board: s, hasWon: u });
                                    },
                                },
                                {
                                    key: 'makeTable',
                                    value: function () {
                                        for (
                                            var e = this, t = [], a = 0;
                                            a < this.props.nrows;
                                            a++
                                        ) {
                                            for (
                                                var n = [],
                                                    i = function (t) {
                                                        var i = ''
                                                            .concat(a, '-')
                                                            .concat(t);
                                                        n.push(
                                                            s.a.createElement(
                                                                h,
                                                                {
                                                                    key: i,
                                                                    isLit:
                                                                        e.state
                                                                            .board[
                                                                            a
                                                                        ][t],
                                                                    flipCellsAroundMe: function () {
                                                                        return e.flipCellsAround(
                                                                            i
                                                                        );
                                                                    },
                                                                }
                                                            )
                                                        );
                                                    },
                                                    c = 0;
                                                c < this.props.ncols;
                                                c++
                                            )
                                                i(c);
                                            t.push(
                                                s.a.createElement(
                                                    'tr',
                                                    { key: a },
                                                    n
                                                )
                                            );
                                        }
                                        return s.a.createElement(
                                            'table',
                                            { className: 'Board' },
                                            s.a.createElement('tbody', null, t)
                                        );
                                    },
                                },
                                {
                                    key: 'render',
                                    value: function () {
                                        return s.a.createElement(
                                            'div',
                                            null,
                                            this.state.hasWon
                                                ? s.a.createElement(
                                                      'div',
                                                      { className: 'winner' },
                                                      s.a.createElement(
                                                          'span',
                                                          {
                                                              className:
                                                                  ' neon-blue',
                                                          },
                                                          'YOU'
                                                      ),
                                                      s.a.createElement(
                                                          'span',
                                                          {
                                                              className:
                                                                  ' neon-orange',
                                                          },
                                                          'WIN! '
                                                      )
                                                  )
                                                : s.a.createElement(
                                                      'div',
                                                      null,
                                                      s.a.createElement(
                                                          'div',
                                                          {
                                                              className:
                                                                  'Board-title',
                                                          },
                                                          s.a.createElement(
                                                              'div',
                                                              {
                                                                  className:
                                                                      ' neon-orange',
                                                              },
                                                              'Lights '
                                                          ),
                                                          s.a.createElement(
                                                              'div',
                                                              {
                                                                  className:
                                                                      ' neon-blue',
                                                              },
                                                              'Out '
                                                          )
                                                      ),
                                                      this.makeTable()
                                                  )
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(n.Component));
            f.defaultProps = { nrows: 5, ncols: 5, chanceLightStartsOn: 0.25 };
            var b = f;
            a(21);
            function v(e) {
                if (!isNaN(e))
                    return (
                        Math.floor(e / 60) +
                        ':' +
                        ('0' + Math.floor(e % 60)).slice(-2)
                    );
            }
            var g = (function (e) {
                    function t() {
                        var e, a;
                        Object(r.a)(this, t);
                        for (
                            var n = arguments.length, s = new Array(n), i = 0;
                            i < n;
                            i++
                        )
                            s[i] = arguments[i];
                        return (
                            ((a = Object(o.a)(
                                this,
                                (e = Object(u.a)(t)).call.apply(
                                    e,
                                    [this].concat(s)
                                )
                            )).state = {
                                currentSong: null,
                                music: 'stopped',
                                currentTime: null,
                                duration: null,
                            }),
                            a
                        );
                    }
                    return (
                        Object(m.a)(t, e),
                        Object(l.a)(t, [
                            {
                                key: 'render',
                                value: function () {
                                    var e = this,
                                        t = v(this.state.currentTime),
                                        a = v(this.state.duration),
                                        n = [
                                            {
                                                id: 1,
                                                title: 'Go Easy',
                                                url:
                                                    'https://thumbs-prod.si-cdn.com/Vj7Cmc62xkQLwQZLiX1SbOV89ik=/420x240/https://public-media.si-cdn.com/filer/cd/0e/cd0efbec-bc15-4f38-894a-7e0e6f5968b8/campfire_edit.jpg',
                                            },
                                            {
                                                id: 2,
                                                title: 'Dreams',
                                                url:
                                                    'https://images.pexels.com/photos/96380/pexels-photo-96380.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                                            },
                                            {
                                                id: 3,
                                                title: 'Chill Out',
                                                url:
                                                    'https://scontent.fbom11-1.fna.fbcdn.net/v/t1.0-9/54433190_2258561064201100_2218823514348060672_o.jpg?_nc_cat=107&_nc_ohc=14CJbrdmXusAQkPOoL9gbVg6VtyPIqSwXK7UiPTZ2llwMbExe7PuES1Ag&_nc_ht=scontent.fbom11-1.fna&oh=f5dde330f28bb39b984dcfb88cded3a2&oe=5EA792C6',
                                            },
                                            {
                                                id: 4,
                                                title: 'Twistter',
                                                url:
                                                    'https://i.ytimg.com/vi/VJ52yJwN_K0/maxresdefault.jpg',
                                            },
                                            {
                                                id: 5,
                                                title: 'Free Bird',
                                                url:
                                                    'https://www.laurenswilliam.nl/wp-content/uploads/2016/09/Chill-music-update-1.jpeg',
                                            },
                                        ].map(function (t) {
                                            return s.a.createElement(
                                                'div',
                                                { class: 'ui list' },
                                                s.a.createElement(
                                                    'div',
                                                    { class: 'item' },
                                                    s.a.createElement('img', {
                                                        class:
                                                            'ui avatar image',
                                                        src: t.url,
                                                        alt: 'music images',
                                                    }),
                                                    s.a.createElement(
                                                        'div',
                                                        { class: 'content' },
                                                        s.a.createElement(
                                                            'li',
                                                            {
                                                                className:
                                                                    'title',
                                                                key: t.id,
                                                                onClick: function () {
                                                                    return e.setState(
                                                                        {
                                                                            currentSong:
                                                                                t.title,
                                                                        }
                                                                    );
                                                                },
                                                            },
                                                            t.title
                                                        )
                                                    )
                                                )
                                            );
                                        });
                                    return s.a.createElement(
                                        'div',
                                        { className: 'App' },
                                        s.a.createElement(
                                            'div',
                                            {
                                                className:
                                                    'ui card main-container',
                                            },
                                            s.a.createElement(
                                                'div',
                                                { className: 'info-container' },
                                                'playing' === this.state.music
                                                    ? s.a.createElement(
                                                          'div',
                                                          {
                                                              className:
                                                                  'current-song',
                                                          },
                                                          'Now Playing ',
                                                          this.state.currentSong
                                                      )
                                                    : null,
                                                'paused' === this.state.music
                                                    ? s.a.createElement(
                                                          'div',
                                                          {
                                                              className:
                                                                  'current-song',
                                                          },
                                                          this.state
                                                              .currentSong,
                                                          ' is paused',
                                                          ' '
                                                      )
                                                    : null,
                                                'playing' ===
                                                    this.state.music ||
                                                    'paused' ===
                                                        this.state.music
                                                    ? s.a.createElement(
                                                          'div',
                                                          null,
                                                          t,
                                                          ' / ',
                                                          a
                                                      )
                                                    : ''
                                            ),
                                            s.a.createElement(
                                                'div',
                                                {
                                                    className:
                                                        'button-container',
                                                },
                                                'paused' === this.state.music &&
                                                    s.a.createElement(
                                                        'button',
                                                        {
                                                            class:
                                                                'ui labeled icon red button',
                                                            onClick: function () {
                                                                return e.setState(
                                                                    {
                                                                        music:
                                                                            'playing',
                                                                    }
                                                                );
                                                            },
                                                        },
                                                        s.a.createElement('i', {
                                                            class:
                                                                ' large play circle outline icon',
                                                        }),
                                                        'Play'
                                                    ),
                                                'playing' ===
                                                    this.state.music &&
                                                    s.a.createElement(
                                                        'button',
                                                        {
                                                            class:
                                                                'ui labeled icon red button',
                                                            onClick: function () {
                                                                return e.setState(
                                                                    {
                                                                        music:
                                                                            'paused',
                                                                    }
                                                                );
                                                            },
                                                        },
                                                        s.a.createElement('i', {
                                                            class:
                                                                'large pause circle outline icon',
                                                        }),
                                                        'Pause'
                                                    ),
                                                'playing' ===
                                                    this.state.music ||
                                                    'paused' ===
                                                        this.state.music
                                                    ? s.a.createElement(
                                                          'button',
                                                          {
                                                              class:
                                                                  'ui labeled icon button',
                                                              onClick: function () {
                                                                  return e.setState(
                                                                      {
                                                                          music:
                                                                              'stop',
                                                                      }
                                                                  );
                                                              },
                                                          },
                                                          s.a.createElement(
                                                              'i',
                                                              {
                                                                  class:
                                                                      'large stop circle outline icon',
                                                              }
                                                          ),
                                                          'Stop'
                                                      )
                                                    : null
                                            ),
                                            s.a.createElement(
                                                'div',
                                                { className: 'playlist' },
                                                n
                                            ),
                                            s.a.createElement('audio', {
                                                ref: function (t) {
                                                    return (e.music = t);
                                                },
                                            })
                                        )
                                    );
                                },
                            },
                            {
                                key: 'componentDidUpdate',
                                value: function (e, t) {
                                    if (
                                        this.state.currentSong !== t.currentSong
                                    ) {
                                        var a;
                                        switch (this.state.currentSong) {
                                            case 'Go Easy':
                                                a =
                                                    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
                                                break;
                                            case 'Dreams':
                                                a =
                                                    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3';
                                                break;
                                            case 'Chill Out':
                                                a =
                                                    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3';
                                                break;
                                            case 'Twistter':
                                                a =
                                                    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3';
                                                break;
                                            case 'Free Bird':
                                                a =
                                                    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3';
                                        }
                                        a &&
                                            ((this.music.src = a),
                                            this.music.play(),
                                            this.setState({
                                                music: 'playing',
                                            }));
                                    }
                                    this.state.music !== t.music &&
                                        ('paused' === this.state.music &&
                                            this.music.pause(),
                                        'playing' === this.state.music &&
                                            'paused' === t.music &&
                                            this.music.play(),
                                        'stop' === this.state.music &&
                                            (this.music.pause(),
                                            (this.currentTime = 0),
                                            this.setState({
                                                currentSong: null,
                                            })));
                                },
                            },
                            {
                                key: 'componentDidMount',
                                value: function () {
                                    var e = this;
                                    this.music.addEventListener(
                                        'timeupdate',
                                        function (t) {
                                            e.setState({
                                                currentTime:
                                                    t.target.currentTime,
                                                duration: t.target.duration,
                                            });
                                        }
                                    );
                                },
                            },
                            {
                                key: 'componentWillUnmount',
                                value: function () {
                                    this.music.removeEventListener(
                                        'timeupdate',
                                        function () {}
                                    );
                                },
                            },
                        ]),
                        t
                    );
                })(s.a.Component),
                w =
                    (a(23),
                    (function (e) {
                        function t() {
                            return (
                                Object(r.a)(this, t),
                                Object(o.a)(
                                    this,
                                    Object(u.a)(t).apply(this, arguments)
                                )
                            );
                        }
                        return (
                            Object(m.a)(t, e),
                            Object(l.a)(t, [
                                {
                                    key: 'render',
                                    value: function () {
                                        return s.a.createElement(
                                            'div',
                                            { className: 'App' },
                                            s.a.createElement(b, null),
                                            s.a.createElement(g, null)
                                        );
                                    },
                                },
                            ]),
                            t
                        );
                    })(n.Component));
            Boolean(
                'localhost' === window.location.hostname ||
                    '[::1]' === window.location.hostname ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
            );
            c.a.render(
                s.a.createElement(w, null),
                document.getElementById('root')
            ),
                'serviceWorker' in navigator &&
                    navigator.serviceWorker.ready.then(function (e) {
                        e.unregister();
                    });
        },
    ],
    [[10, 2, 1]],
]);
//# sourceMappingURL=main.df9a4878.chunk.js.map
