import React from 'react';
import { Button, Message } from 'semantic-ui-react';
import { useCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { showDSGVOBanner } from '../../actions';

const IfConfirm = ({ children, module, showDSGVOBanner }) => {
  const [cookies] = useCookies();

  if (!!Number(cookies[`confirm_${module}`])) {
    return <>{children}</>;
  } else {
    return (
      <div className="block">
        <Message>
          <p>
            <FormattedMessage
              id="You can not view this content at this moment because you have selected to disable {module} cookies in the privacy settings."
              defaultMessage="You can not view this content at this moment because you have selected to disable {module} cookies in the privacy settings."
              values={{
                module: <b>{module}</b>,
              }}
            />
          </p>
          <p>
            <Button onClick={showDSGVOBanner}>
              <FormattedMessage
                id="Customize Privacy Settings"
                defaultMessage="Customize Privacy Settings"
              />
            </Button>
          </p>
        </Message>
      </div>
    );
  }
};

export default connect((state, props) => ({}), {
  showDSGVOBanner,
})(IfConfirm);
