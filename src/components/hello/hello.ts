import { Vue, Component, Prop } from "vue-property-decorator";
import withRender from './hello.html';

@withRender
@Component
export default class HelloComponent extends Vue {
    @Prop() name!: string;
    @Prop() initialEnthusiasm!: number;

    enthusiasm = this.initialEnthusiasm;

    increment() {
        this.enthusiasm++;
    }
    decrement() {
        if (this.enthusiasm > 1) {
            this.enthusiasm--;
        }
    }

    get exclamationMarks(): string {
        return Array(this.enthusiasm + 1).join('!');
    }
}