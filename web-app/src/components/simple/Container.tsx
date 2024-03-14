import {ContainerStyleProps} from "../../types/Container.type.ts";

const Container = ({styles}: ContainerStyleProps) => {

    return (
        <div style={styles}>
            <h3>text goes here </h3>
        </div>
    );

}

export default Container;