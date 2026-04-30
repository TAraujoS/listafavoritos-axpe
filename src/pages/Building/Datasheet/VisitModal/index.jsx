import React from 'react';
import CloseIcon from 'assets/icons/axpe-modal-close-icon.svg';

import { useVisitModalContext } from '../context';

import {
    ModalBody, // MODAL
    ModalBodyWrapper,
    ModalWrapper,
    ModalOverlay,
    ModalHeader,
    ModalHeaderTitle,
    ModalHeaderBtnClose,
    ModalHeaderBtnCloseImage,
    ModalLocal,
    ModalLocalImage,
    ModalLocalDescription,
    ModalLocalTitle,
    ModalLocalInfos,
    ModalForm,
    ModalFormGroupNames,
    ModalFormGroup,
    ModalFormGroupCheckbox,
    ModalFormSubmit,
    ModalFormBtnSubmit
} from './styles';

export default function VisitModal(property) {

    const { address, gallery, infos  } = property.property;

    const {
        modalVisitOn,
        setModalVisitOn
    } = useVisitModalContext();

    const closeVisitModal = (e) => {
        e.preventDefault();
        setModalVisitOn(null);
    }

    if (!modalVisitOn) {
        return null;
    }

    return (
        <div>
            <ModalBody>
                <ModalBodyWrapper>
                    <ModalWrapper>
                        <ModalHeader>
                            <ModalHeaderTitle>Solicite uma visita</ModalHeaderTitle>
                            <ModalHeaderBtnClose
                                onClick={closeVisitModal}
                            >
                                <ModalHeaderBtnCloseImage>
                                    <img src={CloseIcon} alt="Ícone de fechar"/>
                                </ModalHeaderBtnCloseImage>
                            </ModalHeaderBtnClose>
                        </ModalHeader>
                        <ModalLocal>
                            <ModalLocalImage>
                                <img src={(gallery && gallery[0].src) || ''} alt="Foto do imóvel" loading='lazy'/>
                            </ModalLocalImage>
                            <ModalLocalDescription>
                                <ModalLocalTitle>{address.local}</ModalLocalTitle>
                                <ModalLocalInfos>
                                    {infos.areaTotal} m² | {infos.suites} Suite | {infos.bedrooms} Quartos | {infos.parking
                                    } Vagas
                                </ModalLocalInfos>
                            </ModalLocalDescription>
                        </ModalLocal>
                        <ModalForm>
                            <ModalFormGroupNames>
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Nome"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="lastname"
                                        placeholder="Sobrenome"
                                    />
                                </div>
                            </ModalFormGroupNames>
                            <ModalFormGroup>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Seu E-mail"
                                />
                            </ModalFormGroup>
                            <ModalFormGroup>
                                <input
                                    type="text"
                                    name="whatsapp"
                                    placeholder="Seu WhatsApp"
                                />
                            </ModalFormGroup>
                            <ModalFormGroupCheckbox>
                                <input
                                    type="checkbox"
                                    name="accept"
                                    id="acceptVisit"
                                    aria-labelledby="acceptVisit"
                                />
                                <label htmlFor="acceptVisit" id="acceptVisit">Ao clicar em Solicitar visita, você concorda com nosso Termos de Uso.</label>
                            </ModalFormGroupCheckbox>
                            <ModalFormSubmit>
                                <ModalFormBtnSubmit type="submit">Solicitar visita</ModalFormBtnSubmit>
                            </ModalFormSubmit>
                        </ModalForm>
                    </ModalWrapper>
                </ModalBodyWrapper>
            </ModalBody>
            <ModalOverlay />
        </div>
    )
}