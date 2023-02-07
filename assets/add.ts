import {
  _decorator,
  Component,
  Node,
  Prefab,
  ScrollView,
  instantiate,
  Label,
  JsonAsset,
} from "cc";
const { ccclass, property } = _decorator;

@ccclass("add")
export class add extends Component {
  @property({ type: Prefab })
  data: Prefab = null;
  @property({ type: JsonAsset })
  jsondata: JsonAsset = null;

  start() {
    let list_element = this.node.getComponent(ScrollView).content;
    let dataofuser = this.jsondata.json.data;

    for (let index = 0; index < dataofuser.length; index++) {
      let NEW_Ad = instantiate(this.data);
      let rank = NEW_Ad.getChildByName("Rank");
      rank.getComponent(Label).string = dataofuser[index].id;
      //   console.log(this.jsondata.json.data[0].id);
      //   let dataUser = this.jsondata.json.data;
        let name = NEW_Ad.getChildByName("Name");
        name.getComponent(Label).string = dataofuser[index].full_name;

        let score = NEW_Ad.getChildByName("Score");
        score.getComponent(Label).string = dataofuser[index].score;
      list_element.addChild(NEW_Ad);
    }
    // NEW_Ad.children
  }

  update(deltaTime: number) {}
}
