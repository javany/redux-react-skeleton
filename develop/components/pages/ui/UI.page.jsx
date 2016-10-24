import React, { Component, PropTypes } from 'react';

import ModalContainer from '../../../containers/modal/Modal.container.jsx';


import '../../../assets/stylesheets/index.sass';

export default class UIPage extends Component {
    renderContainerModal() {
        const { windowWidth, isModalOpen, containerModalData, handleKeyDown } = this.props;

        return !isModalOpen
            ? null
            : (
            <ModalContainer
                onKeyDown={handleKeyDown}
                windowWidth={windowWidth}
                containerModalData={containerModalData}
            />
        );
    }



    render() {

        return (
            <div className="ui-style-guide">

                <header className="ui__header">
                    <h1>UI Style Guide</h1>
                    Version 1.0
                </header>

                <section className="ui__section">

                    <h2 className="ui__title">Colors Palette</h2>

                    <div className="ui__color ui__color-text">
                        <pre className="ui__color-name">
                            $color-text
                        </pre>
                        <div className="ui__color-code-hex"></div>
                        <div className="ui__color-code-rgba"></div>
                    </div>

                    <div className="ui__color ui__color-link">
                        <pre className="ui__color-name">
                            $color-link
                        </pre>
                        <div className="ui__color-code-hex"></div>
                        <div className="ui__color-code-rgba"></div>
                    </div>

                    <div className="ui__color ui__color-red">
                        <pre className="ui__color-name">
                            $color-red
                        </pre>
                        <div className="ui__color-code-hex"></div>
                        <div className="ui__color-code-rgba"></div>
                    </div>

                    <div className="ui__color ui__color-green">
                        <pre className="ui__color-name">
                            $color-green
                        </pre>
                        <div className="ui__color-code-hex"></div>
                        <div className="ui__color-code-rgba"></div>
                    </div>

                    <div className="ui__color ui__color-blue">
                        <pre className="ui__color-name">
                            $color-blue
                        </pre>
                        <div className="ui__color-code-hex"></div>
                        <div className="ui__color-code-rgba"></div>
                    </div>

                    <div className="ui__color ui__color-orange">
                        <pre className="ui__color-name">
                            $color-orange
                        </pre>
                        <div className="ui__color-code-hex"></div>
                        <div className="ui__color-code-rgba"></div>
                    </div>


                </section>

                <section className="ui__section">
                    <h2 className="ui__title">Typography</h2>
                    
                    <div className="ui__typography">
                        <div className="ui__typography-item">
                            <div className="ui__typography-preview">
                                <h2 className="title">Abcdefgh</h2>
                            </div>

                            <div className="ui__typography-name title">Title</div>
                            <div className="ui__typography-size">1.6 rem</div>
                            <div className="ui__typography-weight">700/bold</div>
                        </div>

                        <div className="ui__typography-item">
                            <div className="ui__typography-preview">
                                <h2 className="sub-title">Abcdefgh</h2>
                            </div>

                            <div className="ui__typography-name title">Sub-title</div>
                            <div className="ui__typography-size">1.6 rem</div>
                            <div className="ui__typography-weight">500/bold</div>
                        </div>
    
                        <div className="ui__typography-item">
                            <div className="ui__typography-preview">
                                <p className="text">Abcdefgh</p>
                            </div>

                            <div className="ui__typography-name title">Paragraph</div>
                            <div className="ui__typography-size">1.6 rem</div>
                            <div className="ui__typography-weight">500/normal</div>
                        </div>

                        <div className="ui__typography-item">
                            <div className="ui__typography-preview">
                                <a className="link" href="#">Abcdefgh</a>
                            </div>

                            <div className="ui__typography-name title">Link</div>
                            <div className="ui__typography-size">1.6 rem</div>
                            <div className="ui__typography-weight">500/normal</div>
                        </div>
                    </div>
                </section>

                {this.renderContainerModal()}

            </div>
        );
    }
}

UIPage.propTypes = {
    children: PropTypes.element,
    windowWidth: PropTypes.number,
    handleKeyDown: PropTypes.func,
    containerModalData: PropTypes.object,
    isModalOpen: PropTypes.bool,
};
