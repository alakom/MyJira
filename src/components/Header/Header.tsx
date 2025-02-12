import style from "./Header.module.scss";
import Icon from "../../../public/icons/icon";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/redux";
import Arrow from "../../../public/icons/arrow";
import Plus from "../../../public/icons/plus";
import { setIsOpenCreateModal } from "../../store/reducers/app/actions";

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isOpenBack } = useAppSelector((state) => state.appReducer);

  return (
    <>
      <div className={style.headerContainer}>
        {isOpenBack && (
          <div className={style.buttonBack} onClick={() => navigate("/MyJira")}>
            <Arrow />
          </div>
        )}
        <div className={style.containerTitle}>
          <div className={style.containerIcon}>
            <Icon />
            <span style={{ marginLeft: "5px" }}>
              <b>MyJira</b>
            </span>
          </div>
        </div>
        {isOpenBack && (
          <div
            className={style.buttonPlus}
            onClick={() => {
              dispatch(setIsOpenCreateModal(true));
            }}
          >
            <Plus />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
