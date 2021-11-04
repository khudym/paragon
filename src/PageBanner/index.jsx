import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Close } from '../../icons';
import { Icon, IconButton } from '..';

export const VARIANTS = {
  light: 'light',
  dark: 'dark',
  warning: 'warning',
  accentA: 'accentA',
};

function PageBanner({
  children, dismissible, dismissAltText, onDismiss, show, variant,
}) {
  if (!show) {
    return null;
  }
  return (
    <div
      className={classNames(
        'pgn__pageBanner-component',
        `pgn__pageBanner__${variant}`,
      )}
      role="alert"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="pgn__pageBanner-content">
        { children }
      </div>
      {dismissible && (
        <span className="pgn__pageBanner-dismissButtonContainer">
          <IconButton
            onClick={onDismiss}
            iconAs={Icon}
            alt={dismissAltText}
            src={Close}
            size="inline"
            invertColors={variant === 'dark'}
            variant={variant === 'dark' ? 'dark' : 'black'}
          />
        </span>
      )}
    </div>
  );
}

PageBanner.defaultProps = {
  children: undefined,
  dismissible: false,
  dismissAltText: 'Dismiss',
  onDismiss: () => {},
  show: true,
  variant: VARIANTS.accentA,
};

PageBanner.propTypes = {
  /** an element rendered inside the Page Banner */
  children: PropTypes.node,
  /** Boolean used to control whether Page Banner is dismissible */
  dismissible: PropTypes.bool,
  /** an element to be set as the dismiss button's alt text (preferably a translated string) */
  dismissAltText: PropTypes.node,
  /** a function to be called on dismiss of the Page Banner */
  onDismiss: PropTypes.func,
  /** Boolean used to control whether the Page Banner shows. */
  show: PropTypes.bool,
  /** a string designating which color variant of the Page Banner to display */
  variant: PropTypes.oneOf([VARIANTS.light, VARIANTS.dark, VARIANTS.warning, VARIANTS.accentA]),
};

export default PageBanner;