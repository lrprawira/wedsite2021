import {Typography} from 'antd';
import {ThemeProvider} from '@mui/material/styles';
import {Button} from '@mui/material';
import styles from '../styles/InvitationSection.module.sass';
import Link from 'next/link';
import BrandMaterialTheme from './BrandMaterialTheme';

const {Title, Text} = Typography;

const InvitationSection = () => {
    return (
        <div className={styles.invitationWrapper}>
            <Title level={4}>Our Online Wedding Ceremony On</Title>
            <Title level={2}>
                Friday, 11 November 2021<br/>
                11 PM (GMT+7)
            </Title>
            <Link href={'/livestreaming'}>
                <a>
                <Button color={'tertiary'} variant={'contained'} style={{marginTop: '3rem'}}>JOIN US</Button>
                </a>
            </Link>
        </div>
    );
};

export default InvitationSection;
