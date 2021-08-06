import React from 'react';
import { Col,Row } from '@themesberg/react-bootstrap';
import { ProfileCardWidget ,ChoosePhotoWidget} from '../Widgets';
import Profile3 from "../../assets/img/team/profile-picture-3.jpg";

const Profile = props=>{
    return (<>
     <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget />
            </Col>
            <Col xs={12}>
              <ChoosePhotoWidget
                title="Select profile photo"
                photo={Profile3}
              />
            </Col>
          </Row>
        </Col>
    </>);
}

export default Profile;