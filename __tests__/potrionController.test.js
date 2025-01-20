const { 
  getPotions, 
  getPotionsById, 
  insertPotion, 
  deletePotion, 
  updatePotion 
} = require("../src/controller/potrionController");
const potionService = require('../src/service/potionService');

jest.mock('../src/service/potionService'); // Mock del servicio

describe('Potion Controller', () => {
  
  describe('getPotions', () => {
    it('should return all potions', async () => {
      const mockPotions = [
        { id: '1', name: 'Healing Potion' },
        { id: '2', name: 'Mana Potion' }
      ];
      potionService.getPotions.mockResolvedValue(mockPotions);

      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };

      await getPotions(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ status: 'OK', data: mockPotions });
    });
  });

  describe('getPotionsById', () => {
    it('should return a potion by ID', async () => {
      const mockPotion = { id: '1', name: 'Healing Potion' };
      potionService.getPotionById.mockResolvedValue([mockPotion]);

      const req = { params: { potion_id: '1' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };

      await getPotionsById(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ status: 'OK', data: mockPotion });
    });

    it('should return 404 if potion not found', async () => {
      potionService.getPotionById.mockResolvedValue([]);

      const req = { params: { potion_id: '99' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };

      await getPotionsById(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith({
        status: 'FAILED',
        error: "Can't find potion with id: 99"
      });
    });
  });

  describe('insertPotion', () => {
    it('should insert a new potion', async () => {
      const mockPotion = { id: '3', name: 'Stamina Potion' };
      potionService.insertPotion.mockResolvedValue(mockPotion);

      const req = { body: mockPotion };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };

      await insertPotion(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ status: 'OK', data: mockPotion });
    });
  });

  describe('deletePotion', () => {
    it('should delete a potion by ID', async () => {
      const mockPotion = { id: '1', name: 'Healing Potion' };
      potionService.deletePotion.mockResolvedValue(mockPotion);

      const req = { params: { potionId: '1' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };

      await deletePotion(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ status: 'OK', data: mockPotion });
    });

    it('should return 404 if potion not found', async () => {
      potionService.deletePotion.mockResolvedValue(null);

      const req = { params: { potionId: '99' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };

      await deletePotion(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith({
        status: 'FAILED',
        error: "Can't find potion with id: 99"
      });
    });
  });

  describe('updatePotion', () => {
    it('should update a potion by ID', async () => {
      const mockPotion = { id: '1', name: 'Updated Healing Potion' };
      potionService.updatePotion.mockResolvedValue(mockPotion);

      const req = { params: { potionId: '1' }, body: { name: 'Updated Healing Potion' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };

      await updatePotion(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith({ status: 'OK', data: mockPotion });
    });

    it('should return 404 if potion not found', async () => {
      potionService.updatePotion.mockResolvedValue(null);

      const req = { params: { potionId: '99' }, body: { name: 'Nonexistent Potion' } };
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };

      await updatePotion(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.send).toHaveBeenCalledWith({
        status: 'FAILED',
        error: "Could find potion with id 99"
      });
    });
  });
});
