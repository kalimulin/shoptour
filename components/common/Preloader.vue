<template>
    <div class="preloader">
        <div
            class="close-button"
            @click="onClose"
        >
            <img
                src="@/assets/images/icons/close.svg"
                alt=""
            >
        </div>
        <div class="vertical-centered-box">
            <div class="content">
                <div class="loader-circle" />
                <div class="loader-line-mask">
                    <div class="loader-line" />
                </div>
                <img
                    class="loader-image"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzciIHZpZXdCb3g9IjAgMCAzMCAzNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjM2NTUgMTcuOTMyN0MxMi45NjcxIDE3LjMwNTkgMTMuNzcwOSAxNi4wNjI3IDEzLjc3MDkgMTQuMjEyM0MxMy43NzA5IDEyLjI5ODggMTIuOTg1MSAxMS4wMjI3IDExLjQxNSAxMC4zOTQ0QzEwLjQ3MTggMTAuMDE5NSA4Ljg1Mzc4IDkuODMwNTcgNi41NjM5NSA5LjgzMDU3SDAuNTAyNzE2VjE4LjQ5OTVINi41NjM5NUM4Ljc4OTMgMTguNDk4IDEwLjM5MDggMTguMzA5MSAxMS4zNjU1IDE3LjkzMjdaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTEuOTg5NCAzNi4wNzZDMTIuMDQ0OCAzNS45Nzg1IDEyLjA3NjMgMzUuODY3NSAxMi4wNzYzIDM1Ljc0NDVDMTIuMDc2MyAzNS40Mjk2IDExLjY5ODQgMzQuNzIxOSAxMC45NDU3IDMzLjYyMjdMNC4yNTMxMiAyMy45NjRIMC41MDI3MTZWMzYuMDk2OUgxMS4zNDQ2QzExLjU2MDUgMzYuMDk2OSAxMS43NzM0IDM2LjA4MiAxMS45ODk0IDM2LjA3NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0yOC42ODczIDEzLjMyOTFDMjguMjcwNCAxMS43OTA1IDI3LjY2NjEgMTAuMzU5OSAyNi44ODAzIDkuMDM1ODJDMjYuMDk0NSA3LjY5ODIxIDI1LjE1ODggNi40ODUwNyAyNC4wNjg2IDUuMzk3ODhDMjIuOTggNC4yOTQyMSAyMS43NjgzIDMuMzQ2NDcgMjAuNDMwNyAyLjU1OTJDMTkuMDkwMSAxLjc3MzQzIDE3LjY1MDUgMS4xNjkxMiAxNi4xMTIgMC43NTA3NEMxNC41ODg0IDAuMzE1ODY3IDEzLjAwMTkgMC4wOTY5MjM4IDExLjM0MTggMC4wOTY5MjM4SDAuNVY0LjQwMzY3SDcuNTk1OTNDMTQuODE5MyA0LjQwMzY3IDE5LjA3NjYgNi4yOTE2MyAyMC4zNjc3IDEwLjA1ODVDMjAuNzc1NiAxMS4yNTIyIDIwLjk3OTUgMTIuNjM0OCAyMC45Nzk1IDE0LjIwNjNDMjAuOTc5NSAxOS41Nzc4IDE3Ljk3ODkgMjIuNzM1OCAxMS45NzYxIDIzLjY3NkwxOC4zODUzIDMyLjc2OTRDMTguNzkxNyAzMy4zNDA3IDE5LjEwNjYgMzMuNzgxNiAxOS4zNzggMzQuMTU4QzE5LjcyNTkgMzMuOTgxIDIwLjA5MTggMzMuODI2NiAyMC40Mjc3IDMzLjYyNzJDMjEuNzY2OCAzMi44NDI5IDIyLjk3ODUgMzEuOTA3MiAyNC4wNjU2IDMwLjgxNTVDMjUuMTU3MyAyOS43MTE4IDI2LjA5MyAyOC40OTcxIDI2Ljg3NzMgMjcuMTc2QzI3LjY2MzEgMjUuODMzOSAyOC4yNjc0IDI0LjQwNDggMjguNjg0MyAyMi44ODI4QzI5LjExOTIgMjEuMzQ1NyAyOS4zMzk2IDE5Ljc0NDIgMjkuMzM5NiAxOC4wOTAyQzI5LjM0MTEgMTYuNDM5MiAyOS4xMjIyIDE0Ljg1NDEgMjguNjg3MyAxMy4zMjkxWiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Preloader",
    methods: {
        onClose() {
            this.$store.commit('loading', {status: false}, {root: true})
        }
    }
}
</script>

<style lang="stylus">
    .preloader {
        position: fixed;
        width: 100%;
        height: 100vh;
        z-index: 1000000;
        top: 0;
        left: 0;
        background-color: rgba(40, 62, 106, 0.5);
        transition 300ms

        .close-button {
            width 24px
            height 24px
            position absolute
            right 32px
            top 32px
            cursor pointer
            img {
                width 100%
                height 100%
                vertical-align top
            }
        }

        .vertical-centered-box {
            position: absolute;
            width: 130px;
            height: 130px;
            border-radius 50%
            top: calc(50% - 65px);
            left: calc(50% - 65px);
            text-align: center;
            background-color: rgba(40, 62, 106, 1);
        }

        .vertical-centered-box:after {
            content: '';
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            margin-right: -0.25em;
        }

        .vertical-centered-box .content {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            display: inline-block;
            vertical-align: middle;
            text-align: left;
            font-size: 0;
            position: relative;
        }

        .loader-circle {
            position: absolute;
            left: calc(50% - 2px);
            top: 50%;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
            margin-left: -60px;
            margin-top: -60px;
        }

        .loader-line-mask {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 60px;
            height: 120px;
            margin-left: -60px;
            margin-top: -60px;
            overflow: hidden;
            -webkit-transform-origin: 60px 60px;
            -moz-transform-origin: 60px 60px;
            -ms-transform-origin: 60px 60px;
            -o-transform-origin: 60px 60px;
            transform-origin: 60px 60px;
            -webkit-mask-image: -webkit-linear-gradient(top, #000000, rgba(0, 0, 0, 0));
            -webkit-animation: rotate 0.8s infinite linear;
            -moz-animation: rotate 0.8s infinite linear;
            -o-animation: rotate 0.8s infinite linear;
            animation: rotate 0.8s infinite linear;
        }

        .loader-line-mask .loader-line {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.5);
        }

        .loader-image {
            margin-left: 3px;
        }

        #particles-background,
        #particles-foreground {
            left: -51%;
            top: -51%;
            width: 202%;
            height: 202%;
            -webkit-transform: scale3d(0.5, 0.5, 1);
            -moz-transform: scale3d(0.5, 0.5, 1);
            -ms-transform: scale3d(0.5, 0.5, 1);
            -o-transform: scale3d(0.5, 0.5, 1);
            transform: scale3d(0.5, 0.5, 1);
        }


        lesshat-selector {
            -lh-property: 0;
        }

        #progress {
            position: absolute;
            color: #fff;
            font-size: 16px;
            top: 100px;
            white-space: nowrap;
            width: 120px;
            text-align: center;
            left: -42px;
            font-family: "Roboto", Helvetica, Arial, sans-serif;
        }

        @-webkit-keyframes rotate {
            0% {
                -webkit-transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
            }
        }

        @-moz-keyframes rotate {
            0% {
                -moz-transform: rotate(0deg);
            }
            100% {
                -moz-transform: rotate(360deg);
            }
        }

        @-o-keyframes rotate {
            0% {
                -o-transform: rotate(0deg);
            }
            100% {
                -o-transform: rotate(360deg);
            }
        }

        @keyframes rotate {
            0% {
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -ms-transform: rotate(0deg);
                transform: rotate(0deg);
            }
            100% {
                -webkit-transform: rotate(360deg);
                -moz-transform: rotate(360deg);
                -ms-transform: rotate(360deg);
                transform: rotate(360deg);
            }
        }
    }
</style>
