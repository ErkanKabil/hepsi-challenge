import Link from 'next/link';
import PlusIcon from "../../../assets/svg/add-plus.svg";
import {IconWrapper, Text, Wrapper} from "./style";
import {ADD_NEW_LİNK} from "../../../core/routes";

const AddPollButton = () => {
    return (
        <Link href={ADD_NEW_LİNK} passHref>
            <Wrapper>
                    <IconWrapper>
                        <PlusIcon />
                    </IconWrapper>
                    <Text>SUBMIT A LINK</Text>
            </Wrapper>
        </Link>

    );
};

export default AddPollButton;
