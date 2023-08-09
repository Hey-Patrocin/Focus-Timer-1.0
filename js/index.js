import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import events from "./events.js"
import {
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop,
    displayMinutes,
    displaySeconds,
} from "./elements.js"

const controls = Controls({
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonStop
})

const timer = Timer({
    displayMinutes,
    displaySeconds,
    resetControls: controls.reset
})

const sound = Sound()

events({ timer, controls, sound })