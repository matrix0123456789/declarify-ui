export class BaseComponent {
    toDOMNode() {
        let el = document.createElement('div');
        if(this.onclick)
            el.onclick = this.onclick.bind(this)
        for (const child of this.children) {
            if (child instanceof BaseComponent) {
                el.append(child.toDOMNode())
            } else {
                el.append(child)
            }
        }
        return el;
    }

    children = []

    append(child) {
        this.children.push(child)
    }
}
