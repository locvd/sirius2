/**
 * Created by locvd on 2017/05/03.
 */

const INSERT = "insert", UPDATE = "update", REMOVE = "remove", PHOTOS_UPLOAD = "photo-upload",
  INTERVIEW_ORDER = "interview-order", USER_REGISTER = "user-register";

const ActivityType = {
  allowedValues: [INSERT, UPDATE, REMOVE, INTERVIEW_ORDER, USER_REGISTER, PHOTOS_UPLOAD],
  INSERT: INSERT,
  UPDATE: UPDATE,
  REMOVE: REMOVE,
  PHOTOS_UPLOAD: PHOTOS_UPLOAD,
  INTERVIEW_ORDER: INTERVIEW_ORDER,
  USER_REGISTER: USER_REGISTER,
  isAdminActivity: function (activity) {
    return activity in [INSERT, UPDATE, REMOVE, PHOTOS_UPLOAD]
  }
};

export default ActivityType;
