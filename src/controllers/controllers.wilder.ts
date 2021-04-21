import { Response, Request, NextFunction } from 'express';

const WilderModel = require('../models/model.wilder');

const create = async (req: Request, res: Response) => {
  await WilderModel.init();
  const wilder = new WilderModel(req.body);
  const result = await wilder.save()
    .then((res: { send: (arg0: { success: boolean; message: string; result: any; }) => void; name: any; }) => {
      res.send({
        success: true,
        message: `Added ${res.name}.`,
        result,
      });
    })
    .catch((err: any) => res.json(
      {
        success: false,
        result: err,
        message: err.message,
      },
    ));
};

const getWilder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const wilder = await WilderModel.find();
    res.send(wilder);
  } catch (err) {
    console.log(err);
    // res.json({success: false, result: err});
  }
};

const upDateWilder = async (req: Request, res: Response) => {
  try {
    const newName = req.body.name;
    await WilderModel.findOneAndUpdate(
      { name: 'oner' },
      { name: newName },
      { new: true },
    )
      .then((wilder: {}) => {
        if (wilder) {
          res.send(`Successfully updated wilder: ${wilder}.`);
        } else {
          res.send('No wilder matches the provided query.');
        }
      });
  } catch (err) {
    res.json({ success: false, result: err });
  }
};

const deleteWilder = async (req: Request, res: Response) => {
  const query = { name: 'onerBerk' };
  await WilderModel.deleteOne(query)
    .then((result: { deletedCount: number; }) => {
      if (result.deletedCount > 0) {
        res.send(`Deleted ${result.deletedCount} item.`);
      } else {
        res.send('No wilder matches .');
      }
    })
    .catch((err: any) => res.send(`Delete failed with error: ${err}`));
};

module.exports = {
  create, getWilder, upDateWilder, deleteWilder,
};
