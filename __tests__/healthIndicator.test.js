const healthIndicator = require('../healthIndicator'); 

describe('healthIndicator', () => {
    it('should return "healthy" for health > 50', () => {
        expect(healthIndicator({ health: 75 })).toBe('healthy');
    });

    it('should return "wounded" for health between 15 and 50', () => {
        expect(healthIndicator({ health: 30 })).toBe('wounded');
    });

    it('should return "critical" for health < 15', () => {
        expect(healthIndicator({ health: 10 })).toBe('critical');
    });
});

