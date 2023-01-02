const TYPE = {
  ADD: "board/add",
  REMOVE: "board/remove",
  EDIT: "board/edit",
};

const add = (title, text, userName, createAt) => ({
  type: TYPE.ADD,
  payload: {
    title,
    text,
    userName,
    createAt,
  },
});

const remove = (id) => ({
  type: TYPE.REMOVE,
  payload: { id },
});

const edit = (id, title, text) => ({
  type: TYPE.EDIT,
  payload: { id, title, text },
});

export const action = { add, remove, edit };

export const initialize = [];

let id = 0;
export const reducer = (state = initialize, action) => {
  const { type, payload } = action;
  switch (type) {
    case TYPE.ADD: {
      const { title, text, userName } = payload;
      id++;
      return [
        {
          id,
          title,
          text,
          userName,
          createdAt: Date.now(),
        },
        ...state,
      ];
    }

    case TYPE.REMOVE: {
      const tempState = [...state].filter((item) => item.id != payload.id);
      return tempState;
    }

    case TYPE.EDIT: {
      const tempState = [...state].map((item) => {
        if (item.id == payload.id) {
          item.title = payload.title;
          item.text = payload.text;
        }
        return item;
      });
      return tempState;
    }

    default:
      return state;
  }
};
