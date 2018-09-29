import ApplicationFacade from "facade/ApplicationFacade";


const { Stage } = Laya;

export default function App() {
    let stage;
    Laya.init(1334, 750, Laya.WebGL);
    stage = Laya.stage;
    stage.scaleMode = Stage.SCALE_FIXED_WIDTH;
    stage.alignH = Stage.ALIGN_CENTER;
    stage.alignV = Stage.ALIGN_MIDDLE;
    stage.screenMode = Stage.SCREEN_HORIZONTAL;
    ApplicationFacade.getInstance().startup();
}
