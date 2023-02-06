const Block = require("./block");
const merkle = require("merkle");

describe("Block Test", () => {
  it("merkle Test", () => {
    // merkleRoot를 확인한다.
    const data = ["a", "b", "c"];
    const block = new Block(data);
    const merkleRoot = merkle("sha256").sync(data).root();

    expect(block.merkleRoot).toBe(merkleRoot);
  });

  it("hash test", () => {
    // hash를 확인한다.
    const data = ["a", "b", "c"];
    const block = new Block(data);
    const block1 = new Block(data, block);
    const hash = Block.createHash(block1);

    expect(block1.hash).toBe(hash);
  });
});
